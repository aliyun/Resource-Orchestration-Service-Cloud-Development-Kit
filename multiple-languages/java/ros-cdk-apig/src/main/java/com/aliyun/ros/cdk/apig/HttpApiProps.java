package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>HttpApi</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:26:59.567Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.HttpApiProps")
@software.amazon.jsii.Jsii.Proxy(HttpApiProps.Jsii$Proxy.class)
public interface HttpApiProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property httpApiName: The name of the HTTP API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiName();

    /**
     * Property agentProtocols: The agent protocols of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAgentProtocols() {
        return null;
    }

    /**
     * Property aiProtocols: The AI protocols of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAiProtocols() {
        return null;
    }

    /**
     * Property authConfig: The authentication configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthConfig() {
        return null;
    }

    /**
     * Property basePath: The base path of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBasePath() {
        return null;
    }

    /**
     * Property belongGatewayId: The gateway ID that the HTTP API belongs to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBelongGatewayId() {
        return null;
    }

    /**
     * Property builtinRouteNames: The builtin route names.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuiltinRouteNames() {
        return null;
    }

    /**
     * Property deployConfigs: The deploy configurations of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployConfigs() {
        return null;
    }

    /**
     * Property description: The description of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enableAuth: Whether to enable authentication.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuth() {
        return null;
    }

    /**
     * Property firstByteTimeout: The first byte timeout.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFirstByteTimeout() {
        return null;
    }

    /**
     * Property ingressConfig: The ingress configuration of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressConfig() {
        return null;
    }

    /**
     * Property modelCategory: The model category.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModelCategory() {
        return null;
    }

    /**
     * Property onlyChangeConfig: Whether to only change config without triggering redeployment.
     * <p>
     * True means only modify configuration without triggering redeployment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOnlyChangeConfig() {
        return null;
    }

    /**
     * Property protocols: The protocols supported by the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocols() {
        return null;
    }

    /**
     * Property removeBasePathOnForward: Whether to remove the base path on forward.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoveBasePathOnForward() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property strategy: The strategy of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStrategy() {
        return null;
    }

    /**
     * Property type: The type of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * Property versionConfig: The version configuration of the HTTP API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HttpApiProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HttpApiProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HttpApiProps> {
        java.lang.Object httpApiName;
        java.lang.Object agentProtocols;
        java.lang.Object aiProtocols;
        java.lang.Object authConfig;
        java.lang.Object basePath;
        java.lang.Object belongGatewayId;
        java.lang.Object builtinRouteNames;
        java.lang.Object deployConfigs;
        java.lang.Object description;
        java.lang.Object enableAuth;
        java.lang.Object firstByteTimeout;
        java.lang.Object ingressConfig;
        java.lang.Object modelCategory;
        java.lang.Object onlyChangeConfig;
        java.lang.Object protocols;
        java.lang.Object removeBasePathOnForward;
        java.lang.Object resourceGroupId;
        java.lang.Object strategy;
        java.lang.Object type;
        java.lang.Object versionConfig;

        /**
         * Sets the value of {@link HttpApiProps#getHttpApiName}
         * @param httpApiName Property httpApiName: The name of the HTTP API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiName(java.lang.String httpApiName) {
            this.httpApiName = httpApiName;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getHttpApiName}
         * @param httpApiName Property httpApiName: The name of the HTTP API. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiName(com.aliyun.ros.cdk.core.IResolvable httpApiName) {
            this.httpApiName = httpApiName;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAgentProtocols}
         * @param agentProtocols Property agentProtocols: The agent protocols of the HTTP API.
         * @return {@code this}
         */
        public Builder agentProtocols(com.aliyun.ros.cdk.core.IResolvable agentProtocols) {
            this.agentProtocols = agentProtocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAgentProtocols}
         * @param agentProtocols Property agentProtocols: The agent protocols of the HTTP API.
         * @return {@code this}
         */
        public Builder agentProtocols(java.util.List<? extends java.lang.Object> agentProtocols) {
            this.agentProtocols = agentProtocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAiProtocols}
         * @param aiProtocols Property aiProtocols: The AI protocols of the HTTP API.
         * @return {@code this}
         */
        public Builder aiProtocols(com.aliyun.ros.cdk.core.IResolvable aiProtocols) {
            this.aiProtocols = aiProtocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAiProtocols}
         * @param aiProtocols Property aiProtocols: The AI protocols of the HTTP API.
         * @return {@code this}
         */
        public Builder aiProtocols(java.util.List<? extends java.lang.Object> aiProtocols) {
            this.aiProtocols = aiProtocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAuthConfig}
         * @param authConfig Property authConfig: The authentication configuration.
         * @return {@code this}
         */
        public Builder authConfig(com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getAuthConfig}
         * @param authConfig Property authConfig: The authentication configuration.
         * @return {@code this}
         */
        public Builder authConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AuthConfigProperty authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBasePath}
         * @param basePath Property basePath: The base path of the HTTP API.
         * @return {@code this}
         */
        public Builder basePath(java.lang.String basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBasePath}
         * @param basePath Property basePath: The base path of the HTTP API.
         * @return {@code this}
         */
        public Builder basePath(com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBelongGatewayId}
         * @param belongGatewayId Property belongGatewayId: The gateway ID that the HTTP API belongs to.
         * @return {@code this}
         */
        public Builder belongGatewayId(java.lang.String belongGatewayId) {
            this.belongGatewayId = belongGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBelongGatewayId}
         * @param belongGatewayId Property belongGatewayId: The gateway ID that the HTTP API belongs to.
         * @return {@code this}
         */
        public Builder belongGatewayId(com.aliyun.ros.cdk.core.IResolvable belongGatewayId) {
            this.belongGatewayId = belongGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBuiltinRouteNames}
         * @param builtinRouteNames Property builtinRouteNames: The builtin route names.
         * @return {@code this}
         */
        public Builder builtinRouteNames(com.aliyun.ros.cdk.core.IResolvable builtinRouteNames) {
            this.builtinRouteNames = builtinRouteNames;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getBuiltinRouteNames}
         * @param builtinRouteNames Property builtinRouteNames: The builtin route names.
         * @return {@code this}
         */
        public Builder builtinRouteNames(java.util.List<? extends java.lang.Object> builtinRouteNames) {
            this.builtinRouteNames = builtinRouteNames;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDeployConfigs}
         * @param deployConfigs Property deployConfigs: The deploy configurations of the HTTP API.
         * @return {@code this}
         */
        public Builder deployConfigs(com.aliyun.ros.cdk.core.IResolvable deployConfigs) {
            this.deployConfigs = deployConfigs;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDeployConfigs}
         * @param deployConfigs Property deployConfigs: The deploy configurations of the HTTP API.
         * @return {@code this}
         */
        public Builder deployConfigs(java.util.List<? extends java.lang.Object> deployConfigs) {
            this.deployConfigs = deployConfigs;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDescription}
         * @param description Property description: The description of the HTTP API.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getDescription}
         * @param description Property description: The description of the HTTP API.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getEnableAuth}
         * @param enableAuth Property enableAuth: Whether to enable authentication.
         * @return {@code this}
         */
        public Builder enableAuth(java.lang.Boolean enableAuth) {
            this.enableAuth = enableAuth;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getEnableAuth}
         * @param enableAuth Property enableAuth: Whether to enable authentication.
         * @return {@code this}
         */
        public Builder enableAuth(com.aliyun.ros.cdk.core.IResolvable enableAuth) {
            this.enableAuth = enableAuth;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getFirstByteTimeout}
         * @param firstByteTimeout Property firstByteTimeout: The first byte timeout.
         * @return {@code this}
         */
        public Builder firstByteTimeout(java.lang.Number firstByteTimeout) {
            this.firstByteTimeout = firstByteTimeout;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getFirstByteTimeout}
         * @param firstByteTimeout Property firstByteTimeout: The first byte timeout.
         * @return {@code this}
         */
        public Builder firstByteTimeout(com.aliyun.ros.cdk.core.IResolvable firstByteTimeout) {
            this.firstByteTimeout = firstByteTimeout;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getIngressConfig}
         * @param ingressConfig Property ingressConfig: The ingress configuration of the HTTP API.
         * @return {@code this}
         */
        public Builder ingressConfig(com.aliyun.ros.cdk.core.IResolvable ingressConfig) {
            this.ingressConfig = ingressConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getIngressConfig}
         * @param ingressConfig Property ingressConfig: The ingress configuration of the HTTP API.
         * @return {@code this}
         */
        public Builder ingressConfig(com.aliyun.ros.cdk.apig.RosHttpApi.IngressConfigProperty ingressConfig) {
            this.ingressConfig = ingressConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getModelCategory}
         * @param modelCategory Property modelCategory: The model category.
         * @return {@code this}
         */
        public Builder modelCategory(java.lang.String modelCategory) {
            this.modelCategory = modelCategory;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getModelCategory}
         * @param modelCategory Property modelCategory: The model category.
         * @return {@code this}
         */
        public Builder modelCategory(com.aliyun.ros.cdk.core.IResolvable modelCategory) {
            this.modelCategory = modelCategory;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getOnlyChangeConfig}
         * @param onlyChangeConfig Property onlyChangeConfig: Whether to only change config without triggering redeployment.
         *                         True means only modify configuration without triggering redeployment.
         * @return {@code this}
         */
        public Builder onlyChangeConfig(java.lang.Boolean onlyChangeConfig) {
            this.onlyChangeConfig = onlyChangeConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getOnlyChangeConfig}
         * @param onlyChangeConfig Property onlyChangeConfig: Whether to only change config without triggering redeployment.
         *                         True means only modify configuration without triggering redeployment.
         * @return {@code this}
         */
        public Builder onlyChangeConfig(com.aliyun.ros.cdk.core.IResolvable onlyChangeConfig) {
            this.onlyChangeConfig = onlyChangeConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getProtocols}
         * @param protocols Property protocols: The protocols supported by the HTTP API.
         * @return {@code this}
         */
        public Builder protocols(com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getProtocols}
         * @param protocols Property protocols: The protocols supported by the HTTP API.
         * @return {@code this}
         */
        public Builder protocols(java.util.List<? extends java.lang.Object> protocols) {
            this.protocols = protocols;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getRemoveBasePathOnForward}
         * @param removeBasePathOnForward Property removeBasePathOnForward: Whether to remove the base path on forward.
         * @return {@code this}
         */
        public Builder removeBasePathOnForward(java.lang.Boolean removeBasePathOnForward) {
            this.removeBasePathOnForward = removeBasePathOnForward;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getRemoveBasePathOnForward}
         * @param removeBasePathOnForward Property removeBasePathOnForward: Whether to remove the base path on forward.
         * @return {@code this}
         */
        public Builder removeBasePathOnForward(com.aliyun.ros.cdk.core.IResolvable removeBasePathOnForward) {
            this.removeBasePathOnForward = removeBasePathOnForward;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getStrategy}
         * @param strategy Property strategy: The strategy of the HTTP API.
         * @return {@code this}
         */
        public Builder strategy(java.lang.String strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getStrategy}
         * @param strategy Property strategy: The strategy of the HTTP API.
         * @return {@code this}
         */
        public Builder strategy(com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getType}
         * @param type Property type: The type of the HTTP API.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getType}
         * @param type Property type: The type of the HTTP API.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getVersionConfig}
         * @param versionConfig Property versionConfig: The version configuration of the HTTP API.
         * @return {@code this}
         */
        public Builder versionConfig(com.aliyun.ros.cdk.core.IResolvable versionConfig) {
            this.versionConfig = versionConfig;
            return this;
        }

        /**
         * Sets the value of {@link HttpApiProps#getVersionConfig}
         * @param versionConfig Property versionConfig: The version configuration of the HTTP API.
         * @return {@code this}
         */
        public Builder versionConfig(com.aliyun.ros.cdk.apig.RosHttpApi.VersionConfigProperty versionConfig) {
            this.versionConfig = versionConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HttpApiProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HttpApiProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HttpApiProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpApiProps {
        private final java.lang.Object httpApiName;
        private final java.lang.Object agentProtocols;
        private final java.lang.Object aiProtocols;
        private final java.lang.Object authConfig;
        private final java.lang.Object basePath;
        private final java.lang.Object belongGatewayId;
        private final java.lang.Object builtinRouteNames;
        private final java.lang.Object deployConfigs;
        private final java.lang.Object description;
        private final java.lang.Object enableAuth;
        private final java.lang.Object firstByteTimeout;
        private final java.lang.Object ingressConfig;
        private final java.lang.Object modelCategory;
        private final java.lang.Object onlyChangeConfig;
        private final java.lang.Object protocols;
        private final java.lang.Object removeBasePathOnForward;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object strategy;
        private final java.lang.Object type;
        private final java.lang.Object versionConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.httpApiName = software.amazon.jsii.Kernel.get(this, "httpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.agentProtocols = software.amazon.jsii.Kernel.get(this, "agentProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aiProtocols = software.amazon.jsii.Kernel.get(this, "aiProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authConfig = software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.basePath = software.amazon.jsii.Kernel.get(this, "basePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.belongGatewayId = software.amazon.jsii.Kernel.get(this, "belongGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.builtinRouteNames = software.amazon.jsii.Kernel.get(this, "builtinRouteNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployConfigs = software.amazon.jsii.Kernel.get(this, "deployConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAuth = software.amazon.jsii.Kernel.get(this, "enableAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.firstByteTimeout = software.amazon.jsii.Kernel.get(this, "firstByteTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ingressConfig = software.amazon.jsii.Kernel.get(this, "ingressConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modelCategory = software.amazon.jsii.Kernel.get(this, "modelCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.onlyChangeConfig = software.amazon.jsii.Kernel.get(this, "onlyChangeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocols = software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removeBasePathOnForward = software.amazon.jsii.Kernel.get(this, "removeBasePathOnForward", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strategy = software.amazon.jsii.Kernel.get(this, "strategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionConfig = software.amazon.jsii.Kernel.get(this, "versionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.httpApiName = java.util.Objects.requireNonNull(builder.httpApiName, "httpApiName is required");
            this.agentProtocols = builder.agentProtocols;
            this.aiProtocols = builder.aiProtocols;
            this.authConfig = builder.authConfig;
            this.basePath = builder.basePath;
            this.belongGatewayId = builder.belongGatewayId;
            this.builtinRouteNames = builder.builtinRouteNames;
            this.deployConfigs = builder.deployConfigs;
            this.description = builder.description;
            this.enableAuth = builder.enableAuth;
            this.firstByteTimeout = builder.firstByteTimeout;
            this.ingressConfig = builder.ingressConfig;
            this.modelCategory = builder.modelCategory;
            this.onlyChangeConfig = builder.onlyChangeConfig;
            this.protocols = builder.protocols;
            this.removeBasePathOnForward = builder.removeBasePathOnForward;
            this.resourceGroupId = builder.resourceGroupId;
            this.strategy = builder.strategy;
            this.type = builder.type;
            this.versionConfig = builder.versionConfig;
        }

        @Override
        public final java.lang.Object getHttpApiName() {
            return this.httpApiName;
        }

        @Override
        public final java.lang.Object getAgentProtocols() {
            return this.agentProtocols;
        }

        @Override
        public final java.lang.Object getAiProtocols() {
            return this.aiProtocols;
        }

        @Override
        public final java.lang.Object getAuthConfig() {
            return this.authConfig;
        }

        @Override
        public final java.lang.Object getBasePath() {
            return this.basePath;
        }

        @Override
        public final java.lang.Object getBelongGatewayId() {
            return this.belongGatewayId;
        }

        @Override
        public final java.lang.Object getBuiltinRouteNames() {
            return this.builtinRouteNames;
        }

        @Override
        public final java.lang.Object getDeployConfigs() {
            return this.deployConfigs;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableAuth() {
            return this.enableAuth;
        }

        @Override
        public final java.lang.Object getFirstByteTimeout() {
            return this.firstByteTimeout;
        }

        @Override
        public final java.lang.Object getIngressConfig() {
            return this.ingressConfig;
        }

        @Override
        public final java.lang.Object getModelCategory() {
            return this.modelCategory;
        }

        @Override
        public final java.lang.Object getOnlyChangeConfig() {
            return this.onlyChangeConfig;
        }

        @Override
        public final java.lang.Object getProtocols() {
            return this.protocols;
        }

        @Override
        public final java.lang.Object getRemoveBasePathOnForward() {
            return this.removeBasePathOnForward;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getStrategy() {
            return this.strategy;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getVersionConfig() {
            return this.versionConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("httpApiName", om.valueToTree(this.getHttpApiName()));
            if (this.getAgentProtocols() != null) {
                data.set("agentProtocols", om.valueToTree(this.getAgentProtocols()));
            }
            if (this.getAiProtocols() != null) {
                data.set("aiProtocols", om.valueToTree(this.getAiProtocols()));
            }
            if (this.getAuthConfig() != null) {
                data.set("authConfig", om.valueToTree(this.getAuthConfig()));
            }
            if (this.getBasePath() != null) {
                data.set("basePath", om.valueToTree(this.getBasePath()));
            }
            if (this.getBelongGatewayId() != null) {
                data.set("belongGatewayId", om.valueToTree(this.getBelongGatewayId()));
            }
            if (this.getBuiltinRouteNames() != null) {
                data.set("builtinRouteNames", om.valueToTree(this.getBuiltinRouteNames()));
            }
            if (this.getDeployConfigs() != null) {
                data.set("deployConfigs", om.valueToTree(this.getDeployConfigs()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableAuth() != null) {
                data.set("enableAuth", om.valueToTree(this.getEnableAuth()));
            }
            if (this.getFirstByteTimeout() != null) {
                data.set("firstByteTimeout", om.valueToTree(this.getFirstByteTimeout()));
            }
            if (this.getIngressConfig() != null) {
                data.set("ingressConfig", om.valueToTree(this.getIngressConfig()));
            }
            if (this.getModelCategory() != null) {
                data.set("modelCategory", om.valueToTree(this.getModelCategory()));
            }
            if (this.getOnlyChangeConfig() != null) {
                data.set("onlyChangeConfig", om.valueToTree(this.getOnlyChangeConfig()));
            }
            if (this.getProtocols() != null) {
                data.set("protocols", om.valueToTree(this.getProtocols()));
            }
            if (this.getRemoveBasePathOnForward() != null) {
                data.set("removeBasePathOnForward", om.valueToTree(this.getRemoveBasePathOnForward()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getStrategy() != null) {
                data.set("strategy", om.valueToTree(this.getStrategy()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }
            if (this.getVersionConfig() != null) {
                data.set("versionConfig", om.valueToTree(this.getVersionConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.HttpApiProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HttpApiProps.Jsii$Proxy that = (HttpApiProps.Jsii$Proxy) o;

            if (!httpApiName.equals(that.httpApiName)) return false;
            if (this.agentProtocols != null ? !this.agentProtocols.equals(that.agentProtocols) : that.agentProtocols != null) return false;
            if (this.aiProtocols != null ? !this.aiProtocols.equals(that.aiProtocols) : that.aiProtocols != null) return false;
            if (this.authConfig != null ? !this.authConfig.equals(that.authConfig) : that.authConfig != null) return false;
            if (this.basePath != null ? !this.basePath.equals(that.basePath) : that.basePath != null) return false;
            if (this.belongGatewayId != null ? !this.belongGatewayId.equals(that.belongGatewayId) : that.belongGatewayId != null) return false;
            if (this.builtinRouteNames != null ? !this.builtinRouteNames.equals(that.builtinRouteNames) : that.builtinRouteNames != null) return false;
            if (this.deployConfigs != null ? !this.deployConfigs.equals(that.deployConfigs) : that.deployConfigs != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableAuth != null ? !this.enableAuth.equals(that.enableAuth) : that.enableAuth != null) return false;
            if (this.firstByteTimeout != null ? !this.firstByteTimeout.equals(that.firstByteTimeout) : that.firstByteTimeout != null) return false;
            if (this.ingressConfig != null ? !this.ingressConfig.equals(that.ingressConfig) : that.ingressConfig != null) return false;
            if (this.modelCategory != null ? !this.modelCategory.equals(that.modelCategory) : that.modelCategory != null) return false;
            if (this.onlyChangeConfig != null ? !this.onlyChangeConfig.equals(that.onlyChangeConfig) : that.onlyChangeConfig != null) return false;
            if (this.protocols != null ? !this.protocols.equals(that.protocols) : that.protocols != null) return false;
            if (this.removeBasePathOnForward != null ? !this.removeBasePathOnForward.equals(that.removeBasePathOnForward) : that.removeBasePathOnForward != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.strategy != null ? !this.strategy.equals(that.strategy) : that.strategy != null) return false;
            if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
            return this.versionConfig != null ? this.versionConfig.equals(that.versionConfig) : that.versionConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.httpApiName.hashCode();
            result = 31 * result + (this.agentProtocols != null ? this.agentProtocols.hashCode() : 0);
            result = 31 * result + (this.aiProtocols != null ? this.aiProtocols.hashCode() : 0);
            result = 31 * result + (this.authConfig != null ? this.authConfig.hashCode() : 0);
            result = 31 * result + (this.basePath != null ? this.basePath.hashCode() : 0);
            result = 31 * result + (this.belongGatewayId != null ? this.belongGatewayId.hashCode() : 0);
            result = 31 * result + (this.builtinRouteNames != null ? this.builtinRouteNames.hashCode() : 0);
            result = 31 * result + (this.deployConfigs != null ? this.deployConfigs.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableAuth != null ? this.enableAuth.hashCode() : 0);
            result = 31 * result + (this.firstByteTimeout != null ? this.firstByteTimeout.hashCode() : 0);
            result = 31 * result + (this.ingressConfig != null ? this.ingressConfig.hashCode() : 0);
            result = 31 * result + (this.modelCategory != null ? this.modelCategory.hashCode() : 0);
            result = 31 * result + (this.onlyChangeConfig != null ? this.onlyChangeConfig.hashCode() : 0);
            result = 31 * result + (this.protocols != null ? this.protocols.hashCode() : 0);
            result = 31 * result + (this.removeBasePathOnForward != null ? this.removeBasePathOnForward.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.strategy != null ? this.strategy.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            result = 31 * result + (this.versionConfig != null ? this.versionConfig.hashCode() : 0);
            return result;
        }
    }
}
