package com.aliyun.ros.cdk.apigateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ApiGateway::Api</code>, which is used to create an API.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.533Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Api")
public class Api extends com.aliyun.ros.cdk.core.Resource {

    protected Api(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Api(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Api(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Api(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApiId: The id of the API.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.ApiProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Api}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Api> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apigateway.ApiProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.ApiProps.Builder();
        }

        /**
         * Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param apiName Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder apiName(final java.lang.String apiName) {
            this.props.apiName(apiName);
            return this;
        }
        /**
         * Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param apiName Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder apiName(final com.aliyun.ros.cdk.core.IResolvable apiName) {
            this.props.apiName(apiName);
            return this;
        }

        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property requestConfig: The configuration of the request.
         * <p>
         * @return {@code this}
         * @param requestConfig Property requestConfig: The configuration of the request. This parameter is required.
         */
        public Builder requestConfig(final com.aliyun.ros.cdk.core.IResolvable requestConfig) {
            this.props.requestConfig(requestConfig);
            return this;
        }
        /**
         * Property requestConfig: The configuration of the request.
         * <p>
         * @return {@code this}
         * @param requestConfig Property requestConfig: The configuration of the request. This parameter is required.
         */
        public Builder requestConfig(final com.aliyun.ros.cdk.apigateway.RosApi.RequestConfigProperty requestConfig) {
            this.props.requestConfig(requestConfig);
            return this;
        }

        /**
         * Property resultSample: The sample of the result.
         * <p>
         * @return {@code this}
         * @param resultSample Property resultSample: The sample of the result. This parameter is required.
         */
        public Builder resultSample(final java.lang.String resultSample) {
            this.props.resultSample(resultSample);
            return this;
        }
        /**
         * Property resultSample: The sample of the result.
         * <p>
         * @return {@code this}
         * @param resultSample Property resultSample: The sample of the result. This parameter is required.
         */
        public Builder resultSample(final com.aliyun.ros.cdk.core.IResolvable resultSample) {
            this.props.resultSample(resultSample);
            return this;
        }

        /**
         * Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".
         * <p>
         * Default is "JSON".
         * <p>
         * @return {@code this}
         * @param resultType Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". This parameter is required.
         */
        public Builder resultType(final java.lang.String resultType) {
            this.props.resultType(resultType);
            return this;
        }
        /**
         * Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".
         * <p>
         * Default is "JSON".
         * <p>
         * @return {@code this}
         * @param resultType Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". This parameter is required.
         */
        public Builder resultType(final com.aliyun.ros.cdk.core.IResolvable resultType) {
            this.props.resultType(resultType);
            return this;
        }

        /**
         * Property serviceConfig: The configuration of the service.
         * <p>
         * @return {@code this}
         * @param serviceConfig Property serviceConfig: The configuration of the service. This parameter is required.
         */
        public Builder serviceConfig(final com.aliyun.ros.cdk.core.IResolvable serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }
        /**
         * Property serviceConfig: The configuration of the service.
         * <p>
         * @return {@code this}
         * @param serviceConfig Property serviceConfig: The configuration of the service. This parameter is required.
         */
        public Builder serviceConfig(final com.aliyun.ros.cdk.apigateway.RosApi.ServiceConfigProperty serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }

        /**
         * Property visibility: Whether to make the API public.
         * <p>
         * "PUBLIC" or "PRIVATE".
         * <p>
         * @return {@code this}
         * @param visibility Property visibility: Whether to make the API public. This parameter is required.
         */
        public Builder visibility(final java.lang.String visibility) {
            this.props.visibility(visibility);
            return this;
        }
        /**
         * Property visibility: Whether to make the API public.
         * <p>
         * "PUBLIC" or "PRIVATE".
         * <p>
         * @return {@code this}
         * @param visibility Property visibility: Whether to make the API public. This parameter is required.
         */
        public Builder visibility(final com.aliyun.ros.cdk.core.IResolvable visibility) {
            this.props.visibility(visibility);
            return this;
        }

        /**
         * Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm.
         * <p>
         * If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
         * HmacSHA256
         * HmacSHA1,HmacSHA256
         * <p>
         * @return {@code this}
         * @param allowSignatureMethod Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm. This parameter is required.
         */
        public Builder allowSignatureMethod(final java.lang.String allowSignatureMethod) {
            this.props.allowSignatureMethod(allowSignatureMethod);
            return this;
        }
        /**
         * Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm.
         * <p>
         * If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
         * HmacSHA256
         * HmacSHA1,HmacSHA256
         * <p>
         * @return {@code this}
         * @param allowSignatureMethod Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm. This parameter is required.
         */
        public Builder allowSignatureMethod(final com.aliyun.ros.cdk.core.IResolvable allowSignatureMethod) {
            this.props.allowSignatureMethod(allowSignatureMethod);
            return this;
        }

        /**
         * Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).
         * <p>
         * DISABLE: Not allowed
         * HEADER: Allow AppCode header authentication
         * HEADER_QUERY: Allow AppCode header and query authentication
         * <p>
         * @return {@code this}
         * @param appCodeAuthType Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group). This parameter is required.
         */
        public Builder appCodeAuthType(final java.lang.String appCodeAuthType) {
            this.props.appCodeAuthType(appCodeAuthType);
            return this;
        }
        /**
         * Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).
         * <p>
         * DISABLE: Not allowed
         * HEADER: Allow AppCode header authentication
         * HEADER_QUERY: Allow AppCode header and query authentication
         * <p>
         * @return {@code this}
         * @param appCodeAuthType Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group). This parameter is required.
         */
        public Builder appCodeAuthType(final com.aliyun.ros.cdk.core.IResolvable appCodeAuthType) {
            this.props.appCodeAuthType(appCodeAuthType);
            return this;
        }

        /**
         * Property authType: Type of authorization of the API .
         * <p>
         * "APP","ANONYMOUS", or "APPOPENID"
         * <p>
         * @return {@code this}
         * @param authType Property authType: Type of authorization of the API . This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * Property authType: Type of authorization of the API .
         * <p>
         * "APP","ANONYMOUS", or "APPOPENID"
         * <p>
         * @return {@code this}
         * @param authType Property authType: Type of authorization of the API . This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * Property constParameters: The const parameters.
         * <p>
         * @return {@code this}
         * @param constParameters Property constParameters: The const parameters. This parameter is required.
         */
        public Builder constParameters(final com.aliyun.ros.cdk.core.IResolvable constParameters) {
            this.props.constParameters(constParameters);
            return this;
        }
        /**
         * Property constParameters: The const parameters.
         * <p>
         * @return {@code this}
         * @param constParameters Property constParameters: The const parameters. This parameter is required.
         */
        public Builder constParameters(final java.util.List<? extends java.lang.Object> constParameters) {
            this.props.constParameters(constParameters);
            return this;
        }

        /**
         * Property description: Description of the API, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the API, less than 180 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the API, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the API, less than 180 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property disableInternet: Set DisableInternet to true, only support intranet to call API.
         * <p>
         * Set DisableInternet to false, then the call is not restricted.
         * <p>
         * @return {@code this}
         * @param disableInternet Property disableInternet: Set DisableInternet to true, only support intranet to call API. This parameter is required.
         */
        public Builder disableInternet(final java.lang.Boolean disableInternet) {
            this.props.disableInternet(disableInternet);
            return this;
        }
        /**
         * Property disableInternet: Set DisableInternet to true, only support intranet to call API.
         * <p>
         * Set DisableInternet to false, then the call is not restricted.
         * <p>
         * @return {@code this}
         * @param disableInternet Property disableInternet: Set DisableInternet to true, only support intranet to call API. This parameter is required.
         */
        public Builder disableInternet(final com.aliyun.ros.cdk.core.IResolvable disableInternet) {
            this.props.disableInternet(disableInternet);
            return this;
        }

        /**
         * Property errorCodeSamples: The Error Code samples.
         * <p>
         * @return {@code this}
         * @param errorCodeSamples Property errorCodeSamples: The Error Code samples. This parameter is required.
         */
        public Builder errorCodeSamples(final com.aliyun.ros.cdk.core.IResolvable errorCodeSamples) {
            this.props.errorCodeSamples(errorCodeSamples);
            return this;
        }
        /**
         * Property errorCodeSamples: The Error Code samples.
         * <p>
         * @return {@code this}
         * @param errorCodeSamples Property errorCodeSamples: The Error Code samples. This parameter is required.
         */
        public Builder errorCodeSamples(final java.util.List<? extends java.lang.Object> errorCodeSamples) {
            this.props.errorCodeSamples(errorCodeSamples);
            return this;
        }

        /**
         * Property failResultSample: The sample of the fail result.
         * <p>
         * @return {@code this}
         * @param failResultSample Property failResultSample: The sample of the fail result. This parameter is required.
         */
        public Builder failResultSample(final java.lang.String failResultSample) {
            this.props.failResultSample(failResultSample);
            return this;
        }
        /**
         * Property failResultSample: The sample of the fail result.
         * <p>
         * @return {@code this}
         * @param failResultSample Property failResultSample: The sample of the fail result. This parameter is required.
         */
        public Builder failResultSample(final com.aliyun.ros.cdk.core.IResolvable failResultSample) {
            this.props.failResultSample(failResultSample);
            return this;
        }

        /**
         * Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.
         * <p>
         * The API gateway will verify the validity of this parameter after receiving this parameter.
         * The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
         * Set ForceNonceCheck to false, then no check.
         * <p>
         * @return {@code this}
         * @param forceNonceCheck Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify. This parameter is required.
         */
        public Builder forceNonceCheck(final java.lang.Boolean forceNonceCheck) {
            this.props.forceNonceCheck(forceNonceCheck);
            return this;
        }
        /**
         * Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.
         * <p>
         * The API gateway will verify the validity of this parameter after receiving this parameter.
         * The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
         * Set ForceNonceCheck to false, then no check.
         * <p>
         * @return {@code this}
         * @param forceNonceCheck Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify. This parameter is required.
         */
        public Builder forceNonceCheck(final com.aliyun.ros.cdk.core.IResolvable forceNonceCheck) {
            this.props.forceNonceCheck(forceNonceCheck);
            return this;
        }

        /**
         * Property openIdConnectConfig: The configuration of the open id.
         * <p>
         * @return {@code this}
         * @param openIdConnectConfig Property openIdConnectConfig: The configuration of the open id. This parameter is required.
         */
        public Builder openIdConnectConfig(final com.aliyun.ros.cdk.core.IResolvable openIdConnectConfig) {
            this.props.openIdConnectConfig(openIdConnectConfig);
            return this;
        }
        /**
         * Property openIdConnectConfig: The configuration of the open id.
         * <p>
         * @return {@code this}
         * @param openIdConnectConfig Property openIdConnectConfig: The configuration of the open id. This parameter is required.
         */
        public Builder openIdConnectConfig(final com.aliyun.ros.cdk.apigateway.RosApi.OpenIdConnectConfigProperty openIdConnectConfig) {
            this.props.openIdConnectConfig(openIdConnectConfig);
            return this;
        }

        /**
         * Property requestParameters: The request parameters.
         * <p>
         * @return {@code this}
         * @param requestParameters Property requestParameters: The request parameters. This parameter is required.
         */
        public Builder requestParameters(final com.aliyun.ros.cdk.core.IResolvable requestParameters) {
            this.props.requestParameters(requestParameters);
            return this;
        }
        /**
         * Property requestParameters: The request parameters.
         * <p>
         * @return {@code this}
         * @param requestParameters Property requestParameters: The request parameters. This parameter is required.
         */
        public Builder requestParameters(final java.util.List<? extends java.lang.Object> requestParameters) {
            this.props.requestParameters(requestParameters);
            return this;
        }

        /**
         * Property resultBodyModel: The return result of the API.
         * <p>
         * @return {@code this}
         * @param resultBodyModel Property resultBodyModel: The return result of the API. This parameter is required.
         */
        public Builder resultBodyModel(final java.lang.String resultBodyModel) {
            this.props.resultBodyModel(resultBodyModel);
            return this;
        }
        /**
         * Property resultBodyModel: The return result of the API.
         * <p>
         * @return {@code this}
         * @param resultBodyModel Property resultBodyModel: The return result of the API. This parameter is required.
         */
        public Builder resultBodyModel(final com.aliyun.ros.cdk.core.IResolvable resultBodyModel) {
            this.props.resultBodyModel(resultBodyModel);
            return this;
        }

        /**
         * Property resultDescriptions: The return description of the API.
         * <p>
         * @return {@code this}
         * @param resultDescriptions Property resultDescriptions: The return description of the API. This parameter is required.
         */
        public Builder resultDescriptions(final java.lang.String resultDescriptions) {
            this.props.resultDescriptions(resultDescriptions);
            return this;
        }
        /**
         * Property resultDescriptions: The return description of the API.
         * <p>
         * @return {@code this}
         * @param resultDescriptions Property resultDescriptions: The return description of the API. This parameter is required.
         */
        public Builder resultDescriptions(final com.aliyun.ros.cdk.core.IResolvable resultDescriptions) {
            this.props.resultDescriptions(resultDescriptions);
            return this;
        }

        /**
         * Property serviceParameters: The service parameters.
         * <p>
         * @return {@code this}
         * @param serviceParameters Property serviceParameters: The service parameters. This parameter is required.
         */
        public Builder serviceParameters(final com.aliyun.ros.cdk.core.IResolvable serviceParameters) {
            this.props.serviceParameters(serviceParameters);
            return this;
        }
        /**
         * Property serviceParameters: The service parameters.
         * <p>
         * @return {@code this}
         * @param serviceParameters Property serviceParameters: The service parameters. This parameter is required.
         */
        public Builder serviceParameters(final java.util.List<? extends java.lang.Object> serviceParameters) {
            this.props.serviceParameters(serviceParameters);
            return this;
        }

        /**
         * Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
         * <p>
         * @return {@code this}
         * @param serviceParametersMap Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters. This parameter is required.
         */
        public Builder serviceParametersMap(final com.aliyun.ros.cdk.core.IResolvable serviceParametersMap) {
            this.props.serviceParametersMap(serviceParametersMap);
            return this;
        }
        /**
         * Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
         * <p>
         * @return {@code this}
         * @param serviceParametersMap Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters. This parameter is required.
         */
        public Builder serviceParametersMap(final java.util.List<? extends java.lang.Object> serviceParametersMap) {
            this.props.serviceParametersMap(serviceParametersMap);
            return this;
        }

        /**
         * Property systemParameters: The system parameters.
         * <p>
         * @return {@code this}
         * @param systemParameters Property systemParameters: The system parameters. This parameter is required.
         */
        public Builder systemParameters(final com.aliyun.ros.cdk.core.IResolvable systemParameters) {
            this.props.systemParameters(systemParameters);
            return this;
        }
        /**
         * Property systemParameters: The system parameters.
         * <p>
         * @return {@code this}
         * @param systemParameters Property systemParameters: The system parameters. This parameter is required.
         */
        public Builder systemParameters(final java.util.List<? extends java.lang.Object> systemParameters) {
            this.props.systemParameters(systemParameters);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property webSocketApiType: The type of the two-way communication API.
         * <p>
         * COMMON: common API
         * REGISTER: registered API
         * UNREGISTER: unregistered API
         * NOTIFY: downstream notification API
         * <p>
         * @return {@code this}
         * @param webSocketApiType Property webSocketApiType: The type of the two-way communication API. This parameter is required.
         */
        public Builder webSocketApiType(final java.lang.String webSocketApiType) {
            this.props.webSocketApiType(webSocketApiType);
            return this;
        }
        /**
         * Property webSocketApiType: The type of the two-way communication API.
         * <p>
         * COMMON: common API
         * REGISTER: registered API
         * UNREGISTER: unregistered API
         * NOTIFY: downstream notification API
         * <p>
         * @return {@code this}
         * @param webSocketApiType Property webSocketApiType: The type of the two-way communication API. This parameter is required.
         */
        public Builder webSocketApiType(final com.aliyun.ros.cdk.core.IResolvable webSocketApiType) {
            this.props.webSocketApiType(webSocketApiType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Api}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Api build() {
            return new com.aliyun.ros.cdk.apigateway.Api(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
