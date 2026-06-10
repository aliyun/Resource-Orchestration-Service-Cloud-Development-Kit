package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::HttpApi</code>, which is used to create an HTTP API.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:26:59.564Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.HttpApi")
public class HttpApi extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IHttpApi {

    protected HttpApi(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HttpApi(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HttpApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HttpApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.HttpApiProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.HttpApiProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.HttpApi}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.HttpApi> {
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
        private final com.aliyun.ros.cdk.apig.HttpApiProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.HttpApiProps.Builder();
        }

        /**
         * Property httpApiName: The name of the HTTP API.
         * <p>
         * @return {@code this}
         * @param httpApiName Property httpApiName: The name of the HTTP API. This parameter is required.
         */
        public Builder httpApiName(final java.lang.String httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }
        /**
         * Property httpApiName: The name of the HTTP API.
         * <p>
         * @return {@code this}
         * @param httpApiName Property httpApiName: The name of the HTTP API. This parameter is required.
         */
        public Builder httpApiName(final com.aliyun.ros.cdk.core.IResolvable httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }

        /**
         * Property agentProtocols: The agent protocols of the HTTP API.
         * <p>
         * @return {@code this}
         * @param agentProtocols Property agentProtocols: The agent protocols of the HTTP API. This parameter is required.
         */
        public Builder agentProtocols(final com.aliyun.ros.cdk.core.IResolvable agentProtocols) {
            this.props.agentProtocols(agentProtocols);
            return this;
        }
        /**
         * Property agentProtocols: The agent protocols of the HTTP API.
         * <p>
         * @return {@code this}
         * @param agentProtocols Property agentProtocols: The agent protocols of the HTTP API. This parameter is required.
         */
        public Builder agentProtocols(final java.util.List<? extends java.lang.Object> agentProtocols) {
            this.props.agentProtocols(agentProtocols);
            return this;
        }

        /**
         * Property aiProtocols: The AI protocols of the HTTP API.
         * <p>
         * @return {@code this}
         * @param aiProtocols Property aiProtocols: The AI protocols of the HTTP API. This parameter is required.
         */
        public Builder aiProtocols(final com.aliyun.ros.cdk.core.IResolvable aiProtocols) {
            this.props.aiProtocols(aiProtocols);
            return this;
        }
        /**
         * Property aiProtocols: The AI protocols of the HTTP API.
         * <p>
         * @return {@code this}
         * @param aiProtocols Property aiProtocols: The AI protocols of the HTTP API. This parameter is required.
         */
        public Builder aiProtocols(final java.util.List<? extends java.lang.Object> aiProtocols) {
            this.props.aiProtocols(aiProtocols);
            return this;
        }

        /**
         * Property authConfig: The authentication configuration.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: The authentication configuration. This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }
        /**
         * Property authConfig: The authentication configuration.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: The authentication configuration. This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.AuthConfigProperty authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }

        /**
         * Property basePath: The base path of the HTTP API.
         * <p>
         * @return {@code this}
         * @param basePath Property basePath: The base path of the HTTP API. This parameter is required.
         */
        public Builder basePath(final java.lang.String basePath) {
            this.props.basePath(basePath);
            return this;
        }
        /**
         * Property basePath: The base path of the HTTP API.
         * <p>
         * @return {@code this}
         * @param basePath Property basePath: The base path of the HTTP API. This parameter is required.
         */
        public Builder basePath(final com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.props.basePath(basePath);
            return this;
        }

        /**
         * Property belongGatewayId: The gateway ID that the HTTP API belongs to.
         * <p>
         * @return {@code this}
         * @param belongGatewayId Property belongGatewayId: The gateway ID that the HTTP API belongs to. This parameter is required.
         */
        public Builder belongGatewayId(final java.lang.String belongGatewayId) {
            this.props.belongGatewayId(belongGatewayId);
            return this;
        }
        /**
         * Property belongGatewayId: The gateway ID that the HTTP API belongs to.
         * <p>
         * @return {@code this}
         * @param belongGatewayId Property belongGatewayId: The gateway ID that the HTTP API belongs to. This parameter is required.
         */
        public Builder belongGatewayId(final com.aliyun.ros.cdk.core.IResolvable belongGatewayId) {
            this.props.belongGatewayId(belongGatewayId);
            return this;
        }

        /**
         * Property builtinRouteNames: The builtin route names.
         * <p>
         * @return {@code this}
         * @param builtinRouteNames Property builtinRouteNames: The builtin route names. This parameter is required.
         */
        public Builder builtinRouteNames(final com.aliyun.ros.cdk.core.IResolvable builtinRouteNames) {
            this.props.builtinRouteNames(builtinRouteNames);
            return this;
        }
        /**
         * Property builtinRouteNames: The builtin route names.
         * <p>
         * @return {@code this}
         * @param builtinRouteNames Property builtinRouteNames: The builtin route names. This parameter is required.
         */
        public Builder builtinRouteNames(final java.util.List<? extends java.lang.Object> builtinRouteNames) {
            this.props.builtinRouteNames(builtinRouteNames);
            return this;
        }

        /**
         * Property deployConfigs: The deploy configurations of the HTTP API.
         * <p>
         * @return {@code this}
         * @param deployConfigs Property deployConfigs: The deploy configurations of the HTTP API. This parameter is required.
         */
        public Builder deployConfigs(final com.aliyun.ros.cdk.core.IResolvable deployConfigs) {
            this.props.deployConfigs(deployConfigs);
            return this;
        }
        /**
         * Property deployConfigs: The deploy configurations of the HTTP API.
         * <p>
         * @return {@code this}
         * @param deployConfigs Property deployConfigs: The deploy configurations of the HTTP API. This parameter is required.
         */
        public Builder deployConfigs(final java.util.List<? extends java.lang.Object> deployConfigs) {
            this.props.deployConfigs(deployConfigs);
            return this;
        }

        /**
         * Property description: The description of the HTTP API.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the HTTP API. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the HTTP API.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the HTTP API. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enableAuth: Whether to enable authentication.
         * <p>
         * @return {@code this}
         * @param enableAuth Property enableAuth: Whether to enable authentication. This parameter is required.
         */
        public Builder enableAuth(final java.lang.Boolean enableAuth) {
            this.props.enableAuth(enableAuth);
            return this;
        }
        /**
         * Property enableAuth: Whether to enable authentication.
         * <p>
         * @return {@code this}
         * @param enableAuth Property enableAuth: Whether to enable authentication. This parameter is required.
         */
        public Builder enableAuth(final com.aliyun.ros.cdk.core.IResolvable enableAuth) {
            this.props.enableAuth(enableAuth);
            return this;
        }

        /**
         * Property firstByteTimeout: The first byte timeout.
         * <p>
         * @return {@code this}
         * @param firstByteTimeout Property firstByteTimeout: The first byte timeout. This parameter is required.
         */
        public Builder firstByteTimeout(final java.lang.Number firstByteTimeout) {
            this.props.firstByteTimeout(firstByteTimeout);
            return this;
        }
        /**
         * Property firstByteTimeout: The first byte timeout.
         * <p>
         * @return {@code this}
         * @param firstByteTimeout Property firstByteTimeout: The first byte timeout. This parameter is required.
         */
        public Builder firstByteTimeout(final com.aliyun.ros.cdk.core.IResolvable firstByteTimeout) {
            this.props.firstByteTimeout(firstByteTimeout);
            return this;
        }

        /**
         * Property ingressConfig: The ingress configuration of the HTTP API.
         * <p>
         * @return {@code this}
         * @param ingressConfig Property ingressConfig: The ingress configuration of the HTTP API. This parameter is required.
         */
        public Builder ingressConfig(final com.aliyun.ros.cdk.core.IResolvable ingressConfig) {
            this.props.ingressConfig(ingressConfig);
            return this;
        }
        /**
         * Property ingressConfig: The ingress configuration of the HTTP API.
         * <p>
         * @return {@code this}
         * @param ingressConfig Property ingressConfig: The ingress configuration of the HTTP API. This parameter is required.
         */
        public Builder ingressConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.IngressConfigProperty ingressConfig) {
            this.props.ingressConfig(ingressConfig);
            return this;
        }

        /**
         * Property modelCategory: The model category.
         * <p>
         * @return {@code this}
         * @param modelCategory Property modelCategory: The model category. This parameter is required.
         */
        public Builder modelCategory(final java.lang.String modelCategory) {
            this.props.modelCategory(modelCategory);
            return this;
        }
        /**
         * Property modelCategory: The model category.
         * <p>
         * @return {@code this}
         * @param modelCategory Property modelCategory: The model category. This parameter is required.
         */
        public Builder modelCategory(final com.aliyun.ros.cdk.core.IResolvable modelCategory) {
            this.props.modelCategory(modelCategory);
            return this;
        }

        /**
         * Property onlyChangeConfig: Whether to only change config without triggering redeployment.
         * <p>
         * True means only modify configuration without triggering redeployment.
         * <p>
         * @return {@code this}
         * @param onlyChangeConfig Property onlyChangeConfig: Whether to only change config without triggering redeployment. This parameter is required.
         */
        public Builder onlyChangeConfig(final java.lang.Boolean onlyChangeConfig) {
            this.props.onlyChangeConfig(onlyChangeConfig);
            return this;
        }
        /**
         * Property onlyChangeConfig: Whether to only change config without triggering redeployment.
         * <p>
         * True means only modify configuration without triggering redeployment.
         * <p>
         * @return {@code this}
         * @param onlyChangeConfig Property onlyChangeConfig: Whether to only change config without triggering redeployment. This parameter is required.
         */
        public Builder onlyChangeConfig(final com.aliyun.ros.cdk.core.IResolvable onlyChangeConfig) {
            this.props.onlyChangeConfig(onlyChangeConfig);
            return this;
        }

        /**
         * Property protocols: The protocols supported by the HTTP API.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: The protocols supported by the HTTP API. This parameter is required.
         */
        public Builder protocols(final com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.props.protocols(protocols);
            return this;
        }
        /**
         * Property protocols: The protocols supported by the HTTP API.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: The protocols supported by the HTTP API. This parameter is required.
         */
        public Builder protocols(final java.util.List<? extends java.lang.Object> protocols) {
            this.props.protocols(protocols);
            return this;
        }

        /**
         * Property removeBasePathOnForward: Whether to remove the base path on forward.
         * <p>
         * @return {@code this}
         * @param removeBasePathOnForward Property removeBasePathOnForward: Whether to remove the base path on forward. This parameter is required.
         */
        public Builder removeBasePathOnForward(final java.lang.Boolean removeBasePathOnForward) {
            this.props.removeBasePathOnForward(removeBasePathOnForward);
            return this;
        }
        /**
         * Property removeBasePathOnForward: Whether to remove the base path on forward.
         * <p>
         * @return {@code this}
         * @param removeBasePathOnForward Property removeBasePathOnForward: Whether to remove the base path on forward. This parameter is required.
         */
        public Builder removeBasePathOnForward(final com.aliyun.ros.cdk.core.IResolvable removeBasePathOnForward) {
            this.props.removeBasePathOnForward(removeBasePathOnForward);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property strategy: The strategy of the HTTP API.
         * <p>
         * @return {@code this}
         * @param strategy Property strategy: The strategy of the HTTP API. This parameter is required.
         */
        public Builder strategy(final java.lang.String strategy) {
            this.props.strategy(strategy);
            return this;
        }
        /**
         * Property strategy: The strategy of the HTTP API.
         * <p>
         * @return {@code this}
         * @param strategy Property strategy: The strategy of the HTTP API. This parameter is required.
         */
        public Builder strategy(final com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.props.strategy(strategy);
            return this;
        }

        /**
         * Property type: The type of the HTTP API.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the HTTP API. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the HTTP API.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the HTTP API. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property versionConfig: The version configuration of the HTTP API.
         * <p>
         * @return {@code this}
         * @param versionConfig Property versionConfig: The version configuration of the HTTP API. This parameter is required.
         */
        public Builder versionConfig(final com.aliyun.ros.cdk.core.IResolvable versionConfig) {
            this.props.versionConfig(versionConfig);
            return this;
        }
        /**
         * Property versionConfig: The version configuration of the HTTP API.
         * <p>
         * @return {@code this}
         * @param versionConfig Property versionConfig: The version configuration of the HTTP API. This parameter is required.
         */
        public Builder versionConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.VersionConfigProperty versionConfig) {
            this.props.versionConfig(versionConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.HttpApi}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.HttpApi build() {
            return new com.aliyun.ros.cdk.apig.HttpApi(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
