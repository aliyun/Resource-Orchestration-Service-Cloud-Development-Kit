package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Api`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.060Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Api")
public class Api extends com.aliyun.ros.cdk.core.Resource {

    protected Api(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Api(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Api(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Api(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.ApiProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Api}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Api> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Api}.
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
