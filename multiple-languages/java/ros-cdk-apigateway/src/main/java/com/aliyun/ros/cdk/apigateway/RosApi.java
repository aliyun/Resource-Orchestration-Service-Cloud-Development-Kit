package com.aliyun.ros.cdk.apigateway;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ApiGateway::Api</code>, which is used to create an API.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:23.133Z")
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
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApiName() {
        return software.amazon.jsii.Kernel.get(this, "apiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "apiName", java.util.Objects.requireNonNull(value, "apiName is required"));
    }

    /**
     */
    public void setApiName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getResultSample() {
        return software.amazon.jsii.Kernel.get(this, "resultSample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResultSample(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultSample", java.util.Objects.requireNonNull(value, "resultSample is required"));
    }

    /**
     */
    public void setResultSample(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resultSample", java.util.Objects.requireNonNull(value, "resultSample is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResultType() {
        return software.amazon.jsii.Kernel.get(this, "resultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResultType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultType", java.util.Objects.requireNonNull(value, "resultType is required"));
    }

    /**
     */
    public void setResultType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getVisibility() {
        return software.amazon.jsii.Kernel.get(this, "visibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVisibility(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "visibility", java.util.Objects.requireNonNull(value, "visibility is required"));
    }

    /**
     */
    public void setVisibility(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "visibility", java.util.Objects.requireNonNull(value, "visibility is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowSignatureMethod() {
        return software.amazon.jsii.Kernel.get(this, "allowSignatureMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowSignatureMethod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "allowSignatureMethod", value);
    }

    /**
     */
    public void setAllowSignatureMethod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowSignatureMethod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppCodeAuthType() {
        return software.amazon.jsii.Kernel.get(this, "appCodeAuthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppCodeAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appCodeAuthType", value);
    }

    /**
     */
    public void setAppCodeAuthType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appCodeAuthType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authType", value);
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.ConstParametersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.ConstParametersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "constParameters", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisableInternet() {
        return software.amazon.jsii.Kernel.get(this, "disableInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisableInternet(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "disableInternet", value);
    }

    /**
     */
    public void setDisableInternet(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disableInternet", value);
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.ErrorCodeSamplesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.ErrorCodeSamplesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "errorCodeSamples", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailResultSample() {
        return software.amazon.jsii.Kernel.get(this, "failResultSample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailResultSample(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failResultSample", value);
    }

    /**
     */
    public void setFailResultSample(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failResultSample", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getForceNonceCheck() {
        return software.amazon.jsii.Kernel.get(this, "forceNonceCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForceNonceCheck(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "forceNonceCheck", value);
    }

    /**
     */
    public void setForceNonceCheck(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forceNonceCheck", value);
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.RequestParametersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.RequestParametersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "requestParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResultBodyModel() {
        return software.amazon.jsii.Kernel.get(this, "resultBodyModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResultBodyModel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultBodyModel", value);
    }

    /**
     */
    public void setResultBodyModel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resultBodyModel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResultDescriptions() {
        return software.amazon.jsii.Kernel.get(this, "resultDescriptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResultDescriptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultDescriptions", value);
    }

    /**
     */
    public void setResultDescriptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resultDescriptions", value);
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.ServiceParametersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.ServiceParametersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.ServiceParametersMapProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.ServiceParametersMapProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apigateway.RosApi.SystemParametersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apigateway.RosApi.SystemParametersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "systemParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebSocketApiType() {
        return software.amazon.jsii.Kernel.get(this, "webSocketApiType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebSocketApiType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "webSocketApiType", value);
    }

    /**
     */
    public void setWebSocketApiType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "webSocketApiType", value);
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
        @org.jetbrains.annotations.NotNull java.lang.Object getConstValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
            java.lang.Object constValue;
            java.lang.Object location;
            java.lang.Object serviceParameterName;
            java.lang.Object description;

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
             * Sets the value of {@link ConstParametersProperty#getConstValue}
             * @param constValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder constValue(com.aliyun.ros.cdk.core.IResolvable constValue) {
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
             * Sets the value of {@link ConstParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
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
             * Sets the value of {@link ConstParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(com.aliyun.ros.cdk.core.IResolvable serviceParameterName) {
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
             * Sets the value of {@link ConstParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConstParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConstParametersProperty {
            private final java.lang.Object constValue;
            private final java.lang.Object location;
            private final java.lang.Object serviceParameterName;
            private final java.lang.Object description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.constValue = software.amazon.jsii.Kernel.get(this, "constValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.constValue = java.util.Objects.requireNonNull(builder.constValue, "constValue is required");
                this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(builder.serviceParameterName, "serviceParameterName is required");
                this.description = builder.description;
            }

            @Override
            public final java.lang.Object getConstValue() {
                return this.constValue;
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            public final java.lang.Object getDescription() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getCode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMessage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
            java.lang.Object code;
            java.lang.Object message;
            java.lang.Object description;

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
             * Sets the value of {@link ErrorCodeSamplesProperty#getCode}
             * @param code the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
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
             * Sets the value of {@link ErrorCodeSamplesProperty#getMessage}
             * @param message the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder message(com.aliyun.ros.cdk.core.IResolvable message) {
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
             * Sets the value of {@link ErrorCodeSamplesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ErrorCodeSamplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ErrorCodeSamplesProperty {
            private final java.lang.Object code;
            private final java.lang.Object message;
            private final java.lang.Object description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.message = software.amazon.jsii.Kernel.get(this, "message", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = java.util.Objects.requireNonNull(builder.code, "code is required");
                this.message = java.util.Objects.requireNonNull(builder.message, "message is required");
                this.description = builder.description;
            }

            @Override
            public final java.lang.Object getCode() {
                return this.code;
            }

            @Override
            public final java.lang.Object getMessage() {
                return this.message;
            }

            @Override
            public final java.lang.Object getDescription() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentTypeCatagory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentTypeValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFcBaseUrl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFcRegionId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFcType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnlyBusinessPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
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
            java.lang.Object contentTypeCatagory;
            java.lang.Object contentTypeValue;
            java.lang.Object fcBaseUrl;
            java.lang.Object fcRegionId;
            java.lang.Object fcType;
            java.lang.Object functionName;
            java.lang.Object method;
            java.lang.Object onlyBusinessPath;
            java.lang.Object path;
            java.lang.Object qualifier;
            java.lang.Object roleArn;
            java.lang.Object serviceName;

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getContentTypeCatagory}
             * @param contentTypeCatagory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeCatagory(java.lang.String contentTypeCatagory) {
                this.contentTypeCatagory = contentTypeCatagory;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getContentTypeCatagory}
             * @param contentTypeCatagory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeCatagory(com.aliyun.ros.cdk.core.IResolvable contentTypeCatagory) {
                this.contentTypeCatagory = contentTypeCatagory;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getContentTypeValue}
             * @param contentTypeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeValue(java.lang.String contentTypeValue) {
                this.contentTypeValue = contentTypeValue;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getContentTypeValue}
             * @param contentTypeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeValue(com.aliyun.ros.cdk.core.IResolvable contentTypeValue) {
                this.contentTypeValue = contentTypeValue;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcBaseUrl}
             * @param fcBaseUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcBaseUrl(java.lang.String fcBaseUrl) {
                this.fcBaseUrl = fcBaseUrl;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcBaseUrl}
             * @param fcBaseUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcBaseUrl(com.aliyun.ros.cdk.core.IResolvable fcBaseUrl) {
                this.fcBaseUrl = fcBaseUrl;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcRegionId}
             * @param fcRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcRegionId(java.lang.String fcRegionId) {
                this.fcRegionId = fcRegionId;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcRegionId}
             * @param fcRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcRegionId(com.aliyun.ros.cdk.core.IResolvable fcRegionId) {
                this.fcRegionId = fcRegionId;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcType}
             * @param fcType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcType(java.lang.String fcType) {
                this.fcType = fcType;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcType}
             * @param fcType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcType(com.aliyun.ros.cdk.core.IResolvable fcType) {
                this.fcType = fcType;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFunctionName}
             * @param functionName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(java.lang.String functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFunctionName}
             * @param functionName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getMethod}
             * @param method the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(java.lang.String method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getMethod}
             * @param method the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder method(com.aliyun.ros.cdk.core.IResolvable method) {
                this.method = method;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getOnlyBusinessPath}
             * @param onlyBusinessPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onlyBusinessPath(java.lang.Boolean onlyBusinessPath) {
                this.onlyBusinessPath = onlyBusinessPath;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getOnlyBusinessPath}
             * @param onlyBusinessPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onlyBusinessPath(com.aliyun.ros.cdk.core.IResolvable onlyBusinessPath) {
                this.onlyBusinessPath = onlyBusinessPath;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
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
             * Sets the value of {@link FunctionComputeConfigProperty#getQualifier}
             * @param qualifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getRoleArn}
             * @param roleArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getRoleArn}
             * @param roleArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getServiceName}
             * @param serviceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getServiceName}
             * @param serviceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
                this.serviceName = serviceName;
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FunctionComputeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionComputeConfigProperty {
            private final java.lang.Object contentTypeCatagory;
            private final java.lang.Object contentTypeValue;
            private final java.lang.Object fcBaseUrl;
            private final java.lang.Object fcRegionId;
            private final java.lang.Object fcType;
            private final java.lang.Object functionName;
            private final java.lang.Object method;
            private final java.lang.Object onlyBusinessPath;
            private final java.lang.Object path;
            private final java.lang.Object qualifier;
            private final java.lang.Object roleArn;
            private final java.lang.Object serviceName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contentTypeCatagory = software.amazon.jsii.Kernel.get(this, "contentTypeCatagory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentTypeValue = software.amazon.jsii.Kernel.get(this, "contentTypeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fcBaseUrl = software.amazon.jsii.Kernel.get(this, "fcBaseUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fcRegionId = software.amazon.jsii.Kernel.get(this, "fcRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fcType = software.amazon.jsii.Kernel.get(this, "fcType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.method = software.amazon.jsii.Kernel.get(this, "method", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onlyBusinessPath = software.amazon.jsii.Kernel.get(this, "onlyBusinessPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contentTypeCatagory = builder.contentTypeCatagory;
                this.contentTypeValue = builder.contentTypeValue;
                this.fcBaseUrl = builder.fcBaseUrl;
                this.fcRegionId = builder.fcRegionId;
                this.fcType = builder.fcType;
                this.functionName = builder.functionName;
                this.method = builder.method;
                this.onlyBusinessPath = builder.onlyBusinessPath;
                this.path = builder.path;
                this.qualifier = builder.qualifier;
                this.roleArn = builder.roleArn;
                this.serviceName = builder.serviceName;
            }

            @Override
            public final java.lang.Object getContentTypeCatagory() {
                return this.contentTypeCatagory;
            }

            @Override
            public final java.lang.Object getContentTypeValue() {
                return this.contentTypeValue;
            }

            @Override
            public final java.lang.Object getFcBaseUrl() {
                return this.fcBaseUrl;
            }

            @Override
            public final java.lang.Object getFcRegionId() {
                return this.fcRegionId;
            }

            @Override
            public final java.lang.Object getFcType() {
                return this.fcType;
            }

            @Override
            public final java.lang.Object getFunctionName() {
                return this.functionName;
            }

            @Override
            public final java.lang.Object getMethod() {
                return this.method;
            }

            @Override
            public final java.lang.Object getOnlyBusinessPath() {
                return this.onlyBusinessPath;
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
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getServiceName() {
                return this.serviceName;
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
                if (this.getFcBaseUrl() != null) {
                    data.set("fcBaseUrl", om.valueToTree(this.getFcBaseUrl()));
                }
                if (this.getFcRegionId() != null) {
                    data.set("fcRegionId", om.valueToTree(this.getFcRegionId()));
                }
                if (this.getFcType() != null) {
                    data.set("fcType", om.valueToTree(this.getFcType()));
                }
                if (this.getFunctionName() != null) {
                    data.set("functionName", om.valueToTree(this.getFunctionName()));
                }
                if (this.getMethod() != null) {
                    data.set("method", om.valueToTree(this.getMethod()));
                }
                if (this.getOnlyBusinessPath() != null) {
                    data.set("onlyBusinessPath", om.valueToTree(this.getOnlyBusinessPath()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }
                if (this.getQualifier() != null) {
                    data.set("qualifier", om.valueToTree(this.getQualifier()));
                }
                if (this.getRoleArn() != null) {
                    data.set("roleArn", om.valueToTree(this.getRoleArn()));
                }
                if (this.getServiceName() != null) {
                    data.set("serviceName", om.valueToTree(this.getServiceName()));
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

                if (this.contentTypeCatagory != null ? !this.contentTypeCatagory.equals(that.contentTypeCatagory) : that.contentTypeCatagory != null) return false;
                if (this.contentTypeValue != null ? !this.contentTypeValue.equals(that.contentTypeValue) : that.contentTypeValue != null) return false;
                if (this.fcBaseUrl != null ? !this.fcBaseUrl.equals(that.fcBaseUrl) : that.fcBaseUrl != null) return false;
                if (this.fcRegionId != null ? !this.fcRegionId.equals(that.fcRegionId) : that.fcRegionId != null) return false;
                if (this.fcType != null ? !this.fcType.equals(that.fcType) : that.fcType != null) return false;
                if (this.functionName != null ? !this.functionName.equals(that.functionName) : that.functionName != null) return false;
                if (this.method != null ? !this.method.equals(that.method) : that.method != null) return false;
                if (this.onlyBusinessPath != null ? !this.onlyBusinessPath.equals(that.onlyBusinessPath) : that.onlyBusinessPath != null) return false;
                if (this.path != null ? !this.path.equals(that.path) : that.path != null) return false;
                if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
                if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
                return this.serviceName != null ? this.serviceName.equals(that.serviceName) : that.serviceName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.contentTypeCatagory != null ? this.contentTypeCatagory.hashCode() : 0;
                result = 31 * result + (this.contentTypeValue != null ? this.contentTypeValue.hashCode() : 0);
                result = 31 * result + (this.fcBaseUrl != null ? this.fcBaseUrl.hashCode() : 0);
                result = 31 * result + (this.fcRegionId != null ? this.fcRegionId.hashCode() : 0);
                result = 31 * result + (this.fcType != null ? this.fcType.hashCode() : 0);
                result = 31 * result + (this.functionName != null ? this.functionName.hashCode() : 0);
                result = 31 * result + (this.method != null ? this.method.hashCode() : 0);
                result = 31 * result + (this.onlyBusinessPath != null ? this.onlyBusinessPath.hashCode() : 0);
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
                result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
                result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
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
        @org.jetbrains.annotations.NotNull java.lang.Object getHeaderName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHeaderValue();

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
            java.lang.Object headerName;
            java.lang.Object headerValue;

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
             * Sets the value of {@link MockHeadersProperty#getHeaderName}
             * @param headerName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerName(com.aliyun.ros.cdk.core.IResolvable headerName) {
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
             * Sets the value of {@link MockHeadersProperty#getHeaderValue}
             * @param headerValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerValue(com.aliyun.ros.cdk.core.IResolvable headerValue) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MockHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MockHeadersProperty {
            private final java.lang.Object headerName;
            private final java.lang.Object headerValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.headerName = software.amazon.jsii.Kernel.get(this, "headerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerValue = software.amazon.jsii.Kernel.get(this, "headerValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.headerName = java.util.Objects.requireNonNull(builder.headerName, "headerName is required");
                this.headerValue = java.util.Objects.requireNonNull(builder.headerValue, "headerValue is required");
            }

            @Override
            public final java.lang.Object getHeaderName() {
                return this.headerName;
            }

            @Override
            public final java.lang.Object getHeaderValue() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getOpenIdApiType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdTokenParamName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPublicKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPublicKeyId() {
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
            java.lang.Object openIdApiType;
            java.lang.Object idTokenParamName;
            java.lang.Object publicKey;
            java.lang.Object publicKeyId;

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
             * Sets the value of {@link OpenIdConnectConfigProperty#getOpenIdApiType}
             * @param openIdApiType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder openIdApiType(com.aliyun.ros.cdk.core.IResolvable openIdApiType) {
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
             * Sets the value of {@link OpenIdConnectConfigProperty#getIdTokenParamName}
             * @param idTokenParamName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder idTokenParamName(com.aliyun.ros.cdk.core.IResolvable idTokenParamName) {
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
             * Sets the value of {@link OpenIdConnectConfigProperty#getPublicKey}
             * @param publicKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicKey(com.aliyun.ros.cdk.core.IResolvable publicKey) {
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
             * Sets the value of {@link OpenIdConnectConfigProperty#getPublicKeyId}
             * @param publicKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicKeyId(com.aliyun.ros.cdk.core.IResolvable publicKeyId) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OpenIdConnectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OpenIdConnectConfigProperty {
            private final java.lang.Object openIdApiType;
            private final java.lang.Object idTokenParamName;
            private final java.lang.Object publicKey;
            private final java.lang.Object publicKeyId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.openIdApiType = software.amazon.jsii.Kernel.get(this, "openIdApiType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.idTokenParamName = software.amazon.jsii.Kernel.get(this, "idTokenParamName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.publicKey = software.amazon.jsii.Kernel.get(this, "publicKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.publicKeyId = software.amazon.jsii.Kernel.get(this, "publicKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.openIdApiType = java.util.Objects.requireNonNull(builder.openIdApiType, "openIdApiType is required");
                this.idTokenParamName = builder.idTokenParamName;
                this.publicKey = builder.publicKey;
                this.publicKeyId = builder.publicKeyId;
            }

            @Override
            public final java.lang.Object getOpenIdApiType() {
                return this.openIdApiType;
            }

            @Override
            public final java.lang.Object getIdTokenParamName() {
                return this.idTokenParamName;
            }

            @Override
            public final java.lang.Object getPublicKey() {
                return this.publicKey;
            }

            @Override
            public final java.lang.Object getPublicKeyId() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getRequestHttpMethod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRequestMode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRequestPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRequestProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBodyFormat() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPostBodyDescription() {
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
            java.lang.Object requestHttpMethod;
            java.lang.Object requestMode;
            java.lang.Object requestPath;
            java.lang.Object requestProtocol;
            java.lang.Object bodyFormat;
            java.lang.Object postBodyDescription;

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
             * Sets the value of {@link RequestConfigProperty#getRequestHttpMethod}
             * @param requestHttpMethod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestHttpMethod(com.aliyun.ros.cdk.core.IResolvable requestHttpMethod) {
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
             * Sets the value of {@link RequestConfigProperty#getRequestMode}
             * @param requestMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestMode(com.aliyun.ros.cdk.core.IResolvable requestMode) {
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
             * Sets the value of {@link RequestConfigProperty#getRequestPath}
             * @param requestPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestPath(com.aliyun.ros.cdk.core.IResolvable requestPath) {
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
             * Sets the value of {@link RequestConfigProperty#getRequestProtocol}
             * @param requestProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestProtocol(com.aliyun.ros.cdk.core.IResolvable requestProtocol) {
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
             * Sets the value of {@link RequestConfigProperty#getBodyFormat}
             * @param bodyFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bodyFormat(com.aliyun.ros.cdk.core.IResolvable bodyFormat) {
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
             * Sets the value of {@link RequestConfigProperty#getPostBodyDescription}
             * @param postBodyDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder postBodyDescription(com.aliyun.ros.cdk.core.IResolvable postBodyDescription) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RequestConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RequestConfigProperty {
            private final java.lang.Object requestHttpMethod;
            private final java.lang.Object requestMode;
            private final java.lang.Object requestPath;
            private final java.lang.Object requestProtocol;
            private final java.lang.Object bodyFormat;
            private final java.lang.Object postBodyDescription;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.requestHttpMethod = software.amazon.jsii.Kernel.get(this, "requestHttpMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestMode = software.amazon.jsii.Kernel.get(this, "requestMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestPath = software.amazon.jsii.Kernel.get(this, "requestPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestProtocol = software.amazon.jsii.Kernel.get(this, "requestProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bodyFormat = software.amazon.jsii.Kernel.get(this, "bodyFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.postBodyDescription = software.amazon.jsii.Kernel.get(this, "postBodyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.requestHttpMethod = java.util.Objects.requireNonNull(builder.requestHttpMethod, "requestHttpMethod is required");
                this.requestMode = java.util.Objects.requireNonNull(builder.requestMode, "requestMode is required");
                this.requestPath = java.util.Objects.requireNonNull(builder.requestPath, "requestPath is required");
                this.requestProtocol = java.util.Objects.requireNonNull(builder.requestProtocol, "requestProtocol is required");
                this.bodyFormat = builder.bodyFormat;
                this.postBodyDescription = builder.postBodyDescription;
            }

            @Override
            public final java.lang.Object getRequestHttpMethod() {
                return this.requestHttpMethod;
            }

            @Override
            public final java.lang.Object getRequestMode() {
                return this.requestMode;
            }

            @Override
            public final java.lang.Object getRequestPath() {
                return this.requestPath;
            }

            @Override
            public final java.lang.Object getRequestProtocol() {
                return this.requestProtocol;
            }

            @Override
            public final java.lang.Object getBodyFormat() {
                return this.bodyFormat;
            }

            @Override
            public final java.lang.Object getPostBodyDescription() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getApiParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParameterType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRequired();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDemoValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDocOrder() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDocShow() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnumValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJsonScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxLength() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinLength() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMinValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegularExpression() {
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
            java.lang.Object apiParameterName;
            java.lang.Object location;
            java.lang.Object parameterType;
            java.lang.Object required;
            java.lang.Object defaultValue;
            java.lang.Object demoValue;
            java.lang.Object description;
            java.lang.Object docOrder;
            java.lang.Object docShow;
            java.lang.Object enumValue;
            java.lang.Object jsonScheme;
            java.lang.Object maxLength;
            java.lang.Object maxValue;
            java.lang.Object minLength;
            java.lang.Object minValue;
            java.lang.Object regularExpression;

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
             * Sets the value of {@link RequestParametersProperty#getApiParameterName}
             * @param apiParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiParameterName(com.aliyun.ros.cdk.core.IResolvable apiParameterName) {
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
             * Sets the value of {@link RequestParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
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
             * Sets the value of {@link RequestParametersProperty#getParameterType}
             * @param parameterType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterType(com.aliyun.ros.cdk.core.IResolvable parameterType) {
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
             * Sets the value of {@link RequestParametersProperty#getRequired}
             * @param required the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder required(com.aliyun.ros.cdk.core.IResolvable required) {
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
             * Sets the value of {@link RequestParametersProperty#getDefaultValue}
             * @param defaultValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultValue(com.aliyun.ros.cdk.core.IResolvable defaultValue) {
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
             * Sets the value of {@link RequestParametersProperty#getDemoValue}
             * @param demoValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder demoValue(com.aliyun.ros.cdk.core.IResolvable demoValue) {
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
             * Sets the value of {@link RequestParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
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
             * Sets the value of {@link RequestParametersProperty#getDocOrder}
             * @param docOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder docOrder(com.aliyun.ros.cdk.core.IResolvable docOrder) {
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
             * Sets the value of {@link RequestParametersProperty#getDocShow}
             * @param docShow the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder docShow(com.aliyun.ros.cdk.core.IResolvable docShow) {
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
             * Sets the value of {@link RequestParametersProperty#getEnumValue}
             * @param enumValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enumValue(com.aliyun.ros.cdk.core.IResolvable enumValue) {
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
             * Sets the value of {@link RequestParametersProperty#getJsonScheme}
             * @param jsonScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonScheme(com.aliyun.ros.cdk.core.IResolvable jsonScheme) {
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
             * Sets the value of {@link RequestParametersProperty#getMaxLength}
             * @param maxLength the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxLength(com.aliyun.ros.cdk.core.IResolvable maxLength) {
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
             * Sets the value of {@link RequestParametersProperty#getMaxValue}
             * @param maxValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxValue(com.aliyun.ros.cdk.core.IResolvable maxValue) {
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
             * Sets the value of {@link RequestParametersProperty#getMinLength}
             * @param minLength the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minLength(com.aliyun.ros.cdk.core.IResolvable minLength) {
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
             * Sets the value of {@link RequestParametersProperty#getMinValue}
             * @param minValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minValue(com.aliyun.ros.cdk.core.IResolvable minValue) {
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
             * Sets the value of {@link RequestParametersProperty#getRegularExpression}
             * @param regularExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularExpression(com.aliyun.ros.cdk.core.IResolvable regularExpression) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RequestParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RequestParametersProperty {
            private final java.lang.Object apiParameterName;
            private final java.lang.Object location;
            private final java.lang.Object parameterType;
            private final java.lang.Object required;
            private final java.lang.Object defaultValue;
            private final java.lang.Object demoValue;
            private final java.lang.Object description;
            private final java.lang.Object docOrder;
            private final java.lang.Object docShow;
            private final java.lang.Object enumValue;
            private final java.lang.Object jsonScheme;
            private final java.lang.Object maxLength;
            private final java.lang.Object maxValue;
            private final java.lang.Object minLength;
            private final java.lang.Object minValue;
            private final java.lang.Object regularExpression;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiParameterName = software.amazon.jsii.Kernel.get(this, "apiParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameterType = software.amazon.jsii.Kernel.get(this, "parameterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.required = software.amazon.jsii.Kernel.get(this, "required", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.defaultValue = software.amazon.jsii.Kernel.get(this, "defaultValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.demoValue = software.amazon.jsii.Kernel.get(this, "demoValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.docOrder = software.amazon.jsii.Kernel.get(this, "docOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.docShow = software.amazon.jsii.Kernel.get(this, "docShow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enumValue = software.amazon.jsii.Kernel.get(this, "enumValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jsonScheme = software.amazon.jsii.Kernel.get(this, "jsonScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxLength = software.amazon.jsii.Kernel.get(this, "maxLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxValue = software.amazon.jsii.Kernel.get(this, "maxValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minLength = software.amazon.jsii.Kernel.get(this, "minLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minValue = software.amazon.jsii.Kernel.get(this, "minValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regularExpression = software.amazon.jsii.Kernel.get(this, "regularExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiParameterName = java.util.Objects.requireNonNull(builder.apiParameterName, "apiParameterName is required");
                this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
                this.parameterType = java.util.Objects.requireNonNull(builder.parameterType, "parameterType is required");
                this.required = java.util.Objects.requireNonNull(builder.required, "required is required");
                this.defaultValue = builder.defaultValue;
                this.demoValue = builder.demoValue;
                this.description = builder.description;
                this.docOrder = builder.docOrder;
                this.docShow = builder.docShow;
                this.enumValue = builder.enumValue;
                this.jsonScheme = builder.jsonScheme;
                this.maxLength = builder.maxLength;
                this.maxValue = builder.maxValue;
                this.minLength = builder.minLength;
                this.minValue = builder.minValue;
                this.regularExpression = builder.regularExpression;
            }

            @Override
            public final java.lang.Object getApiParameterName() {
                return this.apiParameterName;
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getParameterType() {
                return this.parameterType;
            }

            @Override
            public final java.lang.Object getRequired() {
                return this.required;
            }

            @Override
            public final java.lang.Object getDefaultValue() {
                return this.defaultValue;
            }

            @Override
            public final java.lang.Object getDemoValue() {
                return this.demoValue;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDocOrder() {
                return this.docOrder;
            }

            @Override
            public final java.lang.Object getDocShow() {
                return this.docShow;
            }

            @Override
            public final java.lang.Object getEnumValue() {
                return this.enumValue;
            }

            @Override
            public final java.lang.Object getJsonScheme() {
                return this.jsonScheme;
            }

            @Override
            public final java.lang.Object getMaxLength() {
                return this.maxLength;
            }

            @Override
            public final java.lang.Object getMaxValue() {
                return this.maxValue;
            }

            @Override
            public final java.lang.Object getMinLength() {
                return this.minLength;
            }

            @Override
            public final java.lang.Object getMinValue() {
                return this.minValue;
            }

            @Override
            public final java.lang.Object getRegularExpression() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentTypeCatagory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentTypeValue() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getMock() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getMockResult() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMockStatusCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHttpMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServicePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceTimeOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceVpcEnable() {
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
            java.lang.Object contentTypeCatagory;
            java.lang.Object contentTypeValue;
            java.lang.Object functionComputeConfig;
            java.lang.Object mock;
            java.lang.Object mockHeaders;
            java.lang.Object mockResult;
            java.lang.Object mockStatusCode;
            java.lang.Object serviceAddress;
            java.lang.Object serviceHttpMethod;
            java.lang.Object servicePath;
            java.lang.Object serviceProtocol;
            java.lang.Object serviceTimeOut;
            java.lang.Object serviceVpcEnable;
            java.lang.Object vpcConfig;

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
             * Sets the value of {@link ServiceConfigProperty#getContentTypeCatagory}
             * @param contentTypeCatagory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeCatagory(com.aliyun.ros.cdk.core.IResolvable contentTypeCatagory) {
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
             * Sets the value of {@link ServiceConfigProperty#getContentTypeValue}
             * @param contentTypeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeValue(com.aliyun.ros.cdk.core.IResolvable contentTypeValue) {
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
             * Sets the value of {@link ServiceConfigProperty#getMock}
             * @param mock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mock(com.aliyun.ros.cdk.core.IResolvable mock) {
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
             * Sets the value of {@link ServiceConfigProperty#getMockResult}
             * @param mockResult the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockResult(com.aliyun.ros.cdk.core.IResolvable mockResult) {
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
             * Sets the value of {@link ServiceConfigProperty#getMockStatusCode}
             * @param mockStatusCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockStatusCode(com.aliyun.ros.cdk.core.IResolvable mockStatusCode) {
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
             * Sets the value of {@link ServiceConfigProperty#getServiceAddress}
             * @param serviceAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceAddress(com.aliyun.ros.cdk.core.IResolvable serviceAddress) {
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
             * Sets the value of {@link ServiceConfigProperty#getServiceHttpMethod}
             * @param serviceHttpMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHttpMethod(com.aliyun.ros.cdk.core.IResolvable serviceHttpMethod) {
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
             * Sets the value of {@link ServiceConfigProperty#getServicePath}
             * @param servicePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePath(com.aliyun.ros.cdk.core.IResolvable servicePath) {
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
             * Sets the value of {@link ServiceConfigProperty#getServiceProtocol}
             * @param serviceProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceProtocol(com.aliyun.ros.cdk.core.IResolvable serviceProtocol) {
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
             * Sets the value of {@link ServiceConfigProperty#getServiceTimeOut}
             * @param serviceTimeOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceTimeOut(com.aliyun.ros.cdk.core.IResolvable serviceTimeOut) {
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
             * Sets the value of {@link ServiceConfigProperty#getServiceVpcEnable}
             * @param serviceVpcEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceVpcEnable(com.aliyun.ros.cdk.core.IResolvable serviceVpcEnable) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceConfigProperty {
            private final java.lang.Object contentTypeCatagory;
            private final java.lang.Object contentTypeValue;
            private final java.lang.Object functionComputeConfig;
            private final java.lang.Object mock;
            private final java.lang.Object mockHeaders;
            private final java.lang.Object mockResult;
            private final java.lang.Object mockStatusCode;
            private final java.lang.Object serviceAddress;
            private final java.lang.Object serviceHttpMethod;
            private final java.lang.Object servicePath;
            private final java.lang.Object serviceProtocol;
            private final java.lang.Object serviceTimeOut;
            private final java.lang.Object serviceVpcEnable;
            private final java.lang.Object vpcConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contentTypeCatagory = software.amazon.jsii.Kernel.get(this, "contentTypeCatagory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentTypeValue = software.amazon.jsii.Kernel.get(this, "contentTypeValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.functionComputeConfig = software.amazon.jsii.Kernel.get(this, "functionComputeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mock = software.amazon.jsii.Kernel.get(this, "mock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mockHeaders = software.amazon.jsii.Kernel.get(this, "mockHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mockResult = software.amazon.jsii.Kernel.get(this, "mockResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mockStatusCode = software.amazon.jsii.Kernel.get(this, "mockStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceAddress = software.amazon.jsii.Kernel.get(this, "serviceAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHttpMethod = software.amazon.jsii.Kernel.get(this, "serviceHttpMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.servicePath = software.amazon.jsii.Kernel.get(this, "servicePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceProtocol = software.amazon.jsii.Kernel.get(this, "serviceProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceTimeOut = software.amazon.jsii.Kernel.get(this, "serviceTimeOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceVpcEnable = software.amazon.jsii.Kernel.get(this, "serviceVpcEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcConfig = software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contentTypeCatagory = builder.contentTypeCatagory;
                this.contentTypeValue = builder.contentTypeValue;
                this.functionComputeConfig = builder.functionComputeConfig;
                this.mock = builder.mock;
                this.mockHeaders = builder.mockHeaders;
                this.mockResult = builder.mockResult;
                this.mockStatusCode = builder.mockStatusCode;
                this.serviceAddress = builder.serviceAddress;
                this.serviceHttpMethod = builder.serviceHttpMethod;
                this.servicePath = builder.servicePath;
                this.serviceProtocol = builder.serviceProtocol;
                this.serviceTimeOut = builder.serviceTimeOut;
                this.serviceVpcEnable = builder.serviceVpcEnable;
                this.vpcConfig = builder.vpcConfig;
            }

            @Override
            public final java.lang.Object getContentTypeCatagory() {
                return this.contentTypeCatagory;
            }

            @Override
            public final java.lang.Object getContentTypeValue() {
                return this.contentTypeValue;
            }

            @Override
            public final java.lang.Object getFunctionComputeConfig() {
                return this.functionComputeConfig;
            }

            @Override
            public final java.lang.Object getMock() {
                return this.mock;
            }

            @Override
            public final java.lang.Object getMockHeaders() {
                return this.mockHeaders;
            }

            @Override
            public final java.lang.Object getMockResult() {
                return this.mockResult;
            }

            @Override
            public final java.lang.Object getMockStatusCode() {
                return this.mockStatusCode;
            }

            @Override
            public final java.lang.Object getServiceAddress() {
                return this.serviceAddress;
            }

            @Override
            public final java.lang.Object getServiceHttpMethod() {
                return this.serviceHttpMethod;
            }

            @Override
            public final java.lang.Object getServicePath() {
                return this.servicePath;
            }

            @Override
            public final java.lang.Object getServiceProtocol() {
                return this.serviceProtocol;
            }

            @Override
            public final java.lang.Object getServiceTimeOut() {
                return this.serviceTimeOut;
            }

            @Override
            public final java.lang.Object getServiceVpcEnable() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getRequestParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceParameterName();

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
            java.lang.Object requestParameterName;
            java.lang.Object serviceParameterName;

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
             * Sets the value of {@link ServiceParametersMapProperty#getRequestParameterName}
             * @param requestParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestParameterName(com.aliyun.ros.cdk.core.IResolvable requestParameterName) {
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
             * Sets the value of {@link ServiceParametersMapProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(com.aliyun.ros.cdk.core.IResolvable serviceParameterName) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceParametersMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceParametersMapProperty {
            private final java.lang.Object requestParameterName;
            private final java.lang.Object serviceParameterName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.requestParameterName = software.amazon.jsii.Kernel.get(this, "requestParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.requestParameterName = java.util.Objects.requireNonNull(builder.requestParameterName, "requestParameterName is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(builder.serviceParameterName, "serviceParameterName is required");
            }

            @Override
            public final java.lang.Object getRequestParameterName() {
                return this.requestParameterName;
            }

            @Override
            public final java.lang.Object getServiceParameterName() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParameterType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceParameterName();

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
            java.lang.Object location;
            java.lang.Object parameterType;
            java.lang.Object serviceParameterName;

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
             * Sets the value of {@link ServiceParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
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
             * Sets the value of {@link ServiceParametersProperty#getParameterType}
             * @param parameterType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterType(com.aliyun.ros.cdk.core.IResolvable parameterType) {
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
             * Sets the value of {@link ServiceParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(com.aliyun.ros.cdk.core.IResolvable serviceParameterName) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceParametersProperty {
            private final java.lang.Object location;
            private final java.lang.Object parameterType;
            private final java.lang.Object serviceParameterName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameterType = software.amazon.jsii.Kernel.get(this, "parameterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
                this.parameterType = java.util.Objects.requireNonNull(builder.parameterType, "parameterType is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(builder.serviceParameterName, "serviceParameterName is required");
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getParameterType() {
                return this.parameterType;
            }

            @Override
            public final java.lang.Object getServiceParameterName() {
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
        @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDemoValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
            java.lang.Object location;
            java.lang.Object parameterName;
            java.lang.Object serviceParameterName;
            java.lang.Object demoValue;
            java.lang.Object description;

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
             * Sets the value of {@link SystemParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
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
             * Sets the value of {@link SystemParametersProperty#getParameterName}
             * @param parameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(com.aliyun.ros.cdk.core.IResolvable parameterName) {
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
             * Sets the value of {@link SystemParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(com.aliyun.ros.cdk.core.IResolvable serviceParameterName) {
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
             * Sets the value of {@link SystemParametersProperty#getDemoValue}
             * @param demoValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder demoValue(com.aliyun.ros.cdk.core.IResolvable demoValue) {
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
             * Sets the value of {@link SystemParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SystemParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SystemParametersProperty {
            private final java.lang.Object location;
            private final java.lang.Object parameterName;
            private final java.lang.Object serviceParameterName;
            private final java.lang.Object demoValue;
            private final java.lang.Object description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parameterName = software.amazon.jsii.Kernel.get(this, "parameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.demoValue = software.amazon.jsii.Kernel.get(this, "demoValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
                this.parameterName = java.util.Objects.requireNonNull(builder.parameterName, "parameterName is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(builder.serviceParameterName, "serviceParameterName is required");
                this.demoValue = builder.demoValue;
                this.description = builder.description;
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getParameterName() {
                return this.parameterName;
            }

            @Override
            public final java.lang.Object getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            public final java.lang.Object getDemoValue() {
                return this.demoValue;
            }

            @Override
            public final java.lang.Object getDescription() {
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
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
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
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
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
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

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
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
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

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
            java.lang.Object instanceId;
            java.lang.Object port;
            java.lang.Object vpcId;

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
             * Sets the value of {@link VpcConfigProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
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
             * Sets the value of {@link VpcConfigProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
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
             * Sets the value of {@link VpcConfigProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfigProperty {
            private final java.lang.Object instanceId;
            private final java.lang.Object port;
            private final java.lang.Object vpcId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
                this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getVpcId() {
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
         * @param apiName This parameter is required.
         */
        public Builder apiName(final com.aliyun.ros.cdk.core.IResolvable apiName) {
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
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
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
         * @param resultSample This parameter is required.
         */
        public Builder resultSample(final com.aliyun.ros.cdk.core.IResolvable resultSample) {
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
         * @param resultType This parameter is required.
         */
        public Builder resultType(final com.aliyun.ros.cdk.core.IResolvable resultType) {
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
         * @param visibility This parameter is required.
         */
        public Builder visibility(final com.aliyun.ros.cdk.core.IResolvable visibility) {
            this.props.visibility(visibility);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowSignatureMethod This parameter is required.
         */
        public Builder allowSignatureMethod(final java.lang.String allowSignatureMethod) {
            this.props.allowSignatureMethod(allowSignatureMethod);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowSignatureMethod This parameter is required.
         */
        public Builder allowSignatureMethod(final com.aliyun.ros.cdk.core.IResolvable allowSignatureMethod) {
            this.props.allowSignatureMethod(allowSignatureMethod);
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
         * @param appCodeAuthType This parameter is required.
         */
        public Builder appCodeAuthType(final com.aliyun.ros.cdk.core.IResolvable appCodeAuthType) {
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
         * @param authType This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param disableInternet This parameter is required.
         */
        public Builder disableInternet(final java.lang.Boolean disableInternet) {
            this.props.disableInternet(disableInternet);
            return this;
        }
        /**
         * @return {@code this}
         * @param disableInternet This parameter is required.
         */
        public Builder disableInternet(final com.aliyun.ros.cdk.core.IResolvable disableInternet) {
            this.props.disableInternet(disableInternet);
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
         * @param failResultSample This parameter is required.
         */
        public Builder failResultSample(final com.aliyun.ros.cdk.core.IResolvable failResultSample) {
            this.props.failResultSample(failResultSample);
            return this;
        }

        /**
         * @return {@code this}
         * @param forceNonceCheck This parameter is required.
         */
        public Builder forceNonceCheck(final java.lang.Boolean forceNonceCheck) {
            this.props.forceNonceCheck(forceNonceCheck);
            return this;
        }
        /**
         * @return {@code this}
         * @param forceNonceCheck This parameter is required.
         */
        public Builder forceNonceCheck(final com.aliyun.ros.cdk.core.IResolvable forceNonceCheck) {
            this.props.forceNonceCheck(forceNonceCheck);
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
         * @param resultBodyModel This parameter is required.
         */
        public Builder resultBodyModel(final java.lang.String resultBodyModel) {
            this.props.resultBodyModel(resultBodyModel);
            return this;
        }
        /**
         * @return {@code this}
         * @param resultBodyModel This parameter is required.
         */
        public Builder resultBodyModel(final com.aliyun.ros.cdk.core.IResolvable resultBodyModel) {
            this.props.resultBodyModel(resultBodyModel);
            return this;
        }

        /**
         * @return {@code this}
         * @param resultDescriptions This parameter is required.
         */
        public Builder resultDescriptions(final java.lang.String resultDescriptions) {
            this.props.resultDescriptions(resultDescriptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param resultDescriptions This parameter is required.
         */
        public Builder resultDescriptions(final com.aliyun.ros.cdk.core.IResolvable resultDescriptions) {
            this.props.resultDescriptions(resultDescriptions);
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
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param webSocketApiType This parameter is required.
         */
        public Builder webSocketApiType(final java.lang.String webSocketApiType) {
            this.props.webSocketApiType(webSocketApiType);
            return this;
        }
        /**
         * @return {@code this}
         * @param webSocketApiType This parameter is required.
         */
        public Builder webSocketApiType(final com.aliyun.ros.cdk.core.IResolvable webSocketApiType) {
            this.props.webSocketApiType(webSocketApiType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosApi}.
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
