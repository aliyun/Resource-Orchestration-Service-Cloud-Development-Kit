package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::HttpApi</code>, which is used to create an HTTP API.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:26:59.629Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi")
public class RosHttpApi extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHttpApi(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHttpApi(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosHttpApi.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHttpApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosHttpApiProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiName() {
        return software.amazon.jsii.Kernel.get(this, "httpApiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpApiName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpApiName", java.util.Objects.requireNonNull(value, "httpApiName is required"));
    }

    /**
     */
    public void setHttpApiName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpApiName", java.util.Objects.requireNonNull(value, "httpApiName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAgentProtocols() {
        return software.amazon.jsii.Kernel.get(this, "agentProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAgentProtocols(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "agentProtocols", value);
    }

    /**
     */
    public void setAgentProtocols(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "agentProtocols", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAiProtocols() {
        return software.amazon.jsii.Kernel.get(this, "aiProtocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAiProtocols(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aiProtocols", value);
    }

    /**
     */
    public void setAiProtocols(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "aiProtocols", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthConfig() {
        return software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authConfig", value);
    }

    /**
     */
    public void setAuthConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosHttpApi.AuthConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "authConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBasePath() {
        return software.amazon.jsii.Kernel.get(this, "basePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBasePath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "basePath", value);
    }

    /**
     */
    public void setBasePath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "basePath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBelongGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "belongGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBelongGatewayId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "belongGatewayId", value);
    }

    /**
     */
    public void setBelongGatewayId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "belongGatewayId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBuiltinRouteNames() {
        return software.amazon.jsii.Kernel.get(this, "builtinRouteNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuiltinRouteNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "builtinRouteNames", value);
    }

    /**
     */
    public void setBuiltinRouteNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "builtinRouteNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployConfigs() {
        return software.amazon.jsii.Kernel.get(this, "deployConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployConfigs", value);
    }

    /**
     */
    public void setDeployConfigs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apig.RosHttpApi.DeployConfigsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apig.RosHttpApi.DeployConfigsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "deployConfigs", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuth() {
        return software.amazon.jsii.Kernel.get(this, "enableAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAuth(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAuth", value);
    }

    /**
     */
    public void setEnableAuth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAuth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFirstByteTimeout() {
        return software.amazon.jsii.Kernel.get(this, "firstByteTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFirstByteTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "firstByteTimeout", value);
    }

    /**
     */
    public void setFirstByteTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "firstByteTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIngressConfig() {
        return software.amazon.jsii.Kernel.get(this, "ingressConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIngressConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ingressConfig", value);
    }

    /**
     */
    public void setIngressConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosHttpApi.IngressConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ingressConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getModelCategory() {
        return software.amazon.jsii.Kernel.get(this, "modelCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setModelCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "modelCategory", value);
    }

    /**
     */
    public void setModelCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "modelCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOnlyChangeConfig() {
        return software.amazon.jsii.Kernel.get(this, "onlyChangeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOnlyChangeConfig(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "onlyChangeConfig", value);
    }

    /**
     */
    public void setOnlyChangeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "onlyChangeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProtocols() {
        return software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocols(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocols", value);
    }

    /**
     */
    public void setProtocols(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "protocols", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemoveBasePathOnForward() {
        return software.amazon.jsii.Kernel.get(this, "removeBasePathOnForward", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoveBasePathOnForward(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "removeBasePathOnForward", value);
    }

    /**
     */
    public void setRemoveBasePathOnForward(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "removeBasePathOnForward", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getStrategy() {
        return software.amazon.jsii.Kernel.get(this, "strategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "strategy", value);
    }

    /**
     */
    public void setStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "strategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVersionConfig() {
        return software.amazon.jsii.Kernel.get(this, "versionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionConfig", value);
    }

    /**
     */
    public void setVersionConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosHttpApi.VersionConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "versionConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiCacheConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiCacheConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiCacheConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCacheKeyStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCacheMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCacheTtl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEmbeddingConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVectorConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiCacheConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiCacheConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiCacheConfigProperty> {
            java.lang.Object cacheKeyStrategy;
            java.lang.Object cacheMode;
            java.lang.Object cacheTtl;
            java.lang.Object embeddingConfig;
            java.lang.Object pluginStatus;
            java.lang.Object redisConfig;
            java.lang.Object vectorConfig;

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheKeyStrategy}
             * @param cacheKeyStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheKeyStrategy(java.lang.String cacheKeyStrategy) {
                this.cacheKeyStrategy = cacheKeyStrategy;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheKeyStrategy}
             * @param cacheKeyStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheKeyStrategy(com.aliyun.ros.cdk.core.IResolvable cacheKeyStrategy) {
                this.cacheKeyStrategy = cacheKeyStrategy;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheMode}
             * @param cacheMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheMode(java.lang.String cacheMode) {
                this.cacheMode = cacheMode;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheMode}
             * @param cacheMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheMode(com.aliyun.ros.cdk.core.IResolvable cacheMode) {
                this.cacheMode = cacheMode;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheTtl}
             * @param cacheTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheTtl(java.lang.Number cacheTtl) {
                this.cacheTtl = cacheTtl;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getCacheTtl}
             * @param cacheTtl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cacheTtl(com.aliyun.ros.cdk.core.IResolvable cacheTtl) {
                this.cacheTtl = cacheTtl;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getEmbeddingConfig}
             * @param embeddingConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder embeddingConfig(com.aliyun.ros.cdk.core.IResolvable embeddingConfig) {
                this.embeddingConfig = embeddingConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getEmbeddingConfig}
             * @param embeddingConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder embeddingConfig(com.aliyun.ros.cdk.apig.RosHttpApi.EmbeddingConfigProperty embeddingConfig) {
                this.embeddingConfig = embeddingConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.core.IResolvable pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.apig.RosHttpApi.PluginStatusProperty pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getRedisConfig}
             * @param redisConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisConfig(com.aliyun.ros.cdk.core.IResolvable redisConfig) {
                this.redisConfig = redisConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getRedisConfig}
             * @param redisConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisConfig(com.aliyun.ros.cdk.apig.RosHttpApi.RedisConfigProperty redisConfig) {
                this.redisConfig = redisConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getVectorConfig}
             * @param vectorConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vectorConfig(com.aliyun.ros.cdk.core.IResolvable vectorConfig) {
                this.vectorConfig = vectorConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiCacheConfigProperty#getVectorConfig}
             * @param vectorConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vectorConfig(com.aliyun.ros.cdk.apig.RosHttpApi.VectorConfigProperty vectorConfig) {
                this.vectorConfig = vectorConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiCacheConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiCacheConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiCacheConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiCacheConfigProperty {
            private final java.lang.Object cacheKeyStrategy;
            private final java.lang.Object cacheMode;
            private final java.lang.Object cacheTtl;
            private final java.lang.Object embeddingConfig;
            private final java.lang.Object pluginStatus;
            private final java.lang.Object redisConfig;
            private final java.lang.Object vectorConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cacheKeyStrategy = software.amazon.jsii.Kernel.get(this, "cacheKeyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cacheMode = software.amazon.jsii.Kernel.get(this, "cacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cacheTtl = software.amazon.jsii.Kernel.get(this, "cacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.embeddingConfig = software.amazon.jsii.Kernel.get(this, "embeddingConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginStatus = software.amazon.jsii.Kernel.get(this, "pluginStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisConfig = software.amazon.jsii.Kernel.get(this, "redisConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vectorConfig = software.amazon.jsii.Kernel.get(this, "vectorConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cacheKeyStrategy = builder.cacheKeyStrategy;
                this.cacheMode = builder.cacheMode;
                this.cacheTtl = builder.cacheTtl;
                this.embeddingConfig = builder.embeddingConfig;
                this.pluginStatus = builder.pluginStatus;
                this.redisConfig = builder.redisConfig;
                this.vectorConfig = builder.vectorConfig;
            }

            @Override
            public final java.lang.Object getCacheKeyStrategy() {
                return this.cacheKeyStrategy;
            }

            @Override
            public final java.lang.Object getCacheMode() {
                return this.cacheMode;
            }

            @Override
            public final java.lang.Object getCacheTtl() {
                return this.cacheTtl;
            }

            @Override
            public final java.lang.Object getEmbeddingConfig() {
                return this.embeddingConfig;
            }

            @Override
            public final java.lang.Object getPluginStatus() {
                return this.pluginStatus;
            }

            @Override
            public final java.lang.Object getRedisConfig() {
                return this.redisConfig;
            }

            @Override
            public final java.lang.Object getVectorConfig() {
                return this.vectorConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCacheKeyStrategy() != null) {
                    data.set("cacheKeyStrategy", om.valueToTree(this.getCacheKeyStrategy()));
                }
                if (this.getCacheMode() != null) {
                    data.set("cacheMode", om.valueToTree(this.getCacheMode()));
                }
                if (this.getCacheTtl() != null) {
                    data.set("cacheTtl", om.valueToTree(this.getCacheTtl()));
                }
                if (this.getEmbeddingConfig() != null) {
                    data.set("embeddingConfig", om.valueToTree(this.getEmbeddingConfig()));
                }
                if (this.getPluginStatus() != null) {
                    data.set("pluginStatus", om.valueToTree(this.getPluginStatus()));
                }
                if (this.getRedisConfig() != null) {
                    data.set("redisConfig", om.valueToTree(this.getRedisConfig()));
                }
                if (this.getVectorConfig() != null) {
                    data.set("vectorConfig", om.valueToTree(this.getVectorConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiCacheConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiCacheConfigProperty.Jsii$Proxy that = (AiCacheConfigProperty.Jsii$Proxy) o;

                if (this.cacheKeyStrategy != null ? !this.cacheKeyStrategy.equals(that.cacheKeyStrategy) : that.cacheKeyStrategy != null) return false;
                if (this.cacheMode != null ? !this.cacheMode.equals(that.cacheMode) : that.cacheMode != null) return false;
                if (this.cacheTtl != null ? !this.cacheTtl.equals(that.cacheTtl) : that.cacheTtl != null) return false;
                if (this.embeddingConfig != null ? !this.embeddingConfig.equals(that.embeddingConfig) : that.embeddingConfig != null) return false;
                if (this.pluginStatus != null ? !this.pluginStatus.equals(that.pluginStatus) : that.pluginStatus != null) return false;
                if (this.redisConfig != null ? !this.redisConfig.equals(that.redisConfig) : that.redisConfig != null) return false;
                return this.vectorConfig != null ? this.vectorConfig.equals(that.vectorConfig) : that.vectorConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cacheKeyStrategy != null ? this.cacheKeyStrategy.hashCode() : 0;
                result = 31 * result + (this.cacheMode != null ? this.cacheMode.hashCode() : 0);
                result = 31 * result + (this.cacheTtl != null ? this.cacheTtl.hashCode() : 0);
                result = 31 * result + (this.embeddingConfig != null ? this.embeddingConfig.hashCode() : 0);
                result = 31 * result + (this.pluginStatus != null ? this.pluginStatus.hashCode() : 0);
                result = 31 * result + (this.redisConfig != null ? this.redisConfig.hashCode() : 0);
                result = 31 * result + (this.vectorConfig != null ? this.vectorConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiFallbackConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiFallbackConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiFallbackConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnlyRedirectUpstreamCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEmbedded() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceConfigs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiFallbackConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiFallbackConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiFallbackConfigProperty> {
            java.lang.Object onlyRedirectUpstreamCode;
            java.lang.Object routeEmbedded;
            java.lang.Object serviceConfigs;

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getOnlyRedirectUpstreamCode}
             * @param onlyRedirectUpstreamCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onlyRedirectUpstreamCode(java.lang.Boolean onlyRedirectUpstreamCode) {
                this.onlyRedirectUpstreamCode = onlyRedirectUpstreamCode;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getOnlyRedirectUpstreamCode}
             * @param onlyRedirectUpstreamCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onlyRedirectUpstreamCode(com.aliyun.ros.cdk.core.IResolvable onlyRedirectUpstreamCode) {
                this.onlyRedirectUpstreamCode = onlyRedirectUpstreamCode;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getRouteEmbedded}
             * @param routeEmbedded the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEmbedded(java.lang.Boolean routeEmbedded) {
                this.routeEmbedded = routeEmbedded;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getRouteEmbedded}
             * @param routeEmbedded the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeEmbedded(com.aliyun.ros.cdk.core.IResolvable routeEmbedded) {
                this.routeEmbedded = routeEmbedded;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getServiceConfigs}
             * @param serviceConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceConfigs(com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
                this.serviceConfigs = serviceConfigs;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigProperty#getServiceConfigs}
             * @param serviceConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceConfigs(java.util.List<? extends java.lang.Object> serviceConfigs) {
                this.serviceConfigs = serviceConfigs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiFallbackConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiFallbackConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiFallbackConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiFallbackConfigProperty {
            private final java.lang.Object onlyRedirectUpstreamCode;
            private final java.lang.Object routeEmbedded;
            private final java.lang.Object serviceConfigs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.onlyRedirectUpstreamCode = software.amazon.jsii.Kernel.get(this, "onlyRedirectUpstreamCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routeEmbedded = software.amazon.jsii.Kernel.get(this, "routeEmbedded", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceConfigs = software.amazon.jsii.Kernel.get(this, "serviceConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.onlyRedirectUpstreamCode = builder.onlyRedirectUpstreamCode;
                this.routeEmbedded = builder.routeEmbedded;
                this.serviceConfigs = builder.serviceConfigs;
            }

            @Override
            public final java.lang.Object getOnlyRedirectUpstreamCode() {
                return this.onlyRedirectUpstreamCode;
            }

            @Override
            public final java.lang.Object getRouteEmbedded() {
                return this.routeEmbedded;
            }

            @Override
            public final java.lang.Object getServiceConfigs() {
                return this.serviceConfigs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOnlyRedirectUpstreamCode() != null) {
                    data.set("onlyRedirectUpstreamCode", om.valueToTree(this.getOnlyRedirectUpstreamCode()));
                }
                if (this.getRouteEmbedded() != null) {
                    data.set("routeEmbedded", om.valueToTree(this.getRouteEmbedded()));
                }
                if (this.getServiceConfigs() != null) {
                    data.set("serviceConfigs", om.valueToTree(this.getServiceConfigs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiFallbackConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiFallbackConfigProperty.Jsii$Proxy that = (AiFallbackConfigProperty.Jsii$Proxy) o;

                if (this.onlyRedirectUpstreamCode != null ? !this.onlyRedirectUpstreamCode.equals(that.onlyRedirectUpstreamCode) : that.onlyRedirectUpstreamCode != null) return false;
                if (this.routeEmbedded != null ? !this.routeEmbedded.equals(that.routeEmbedded) : that.routeEmbedded != null) return false;
                return this.serviceConfigs != null ? this.serviceConfigs.equals(that.serviceConfigs) : that.serviceConfigs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.onlyRedirectUpstreamCode != null ? this.onlyRedirectUpstreamCode.hashCode() : 0;
                result = 31 * result + (this.routeEmbedded != null ? this.routeEmbedded.hashCode() : 0);
                result = 31 * result + (this.serviceConfigs != null ? this.serviceConfigs.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiFallbackConfigServiceConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(AiFallbackConfigServiceConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiFallbackConfigServiceConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassThroughModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetModelName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiFallbackConfigServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiFallbackConfigServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiFallbackConfigServiceConfigsProperty> {
            java.lang.Object name;
            java.lang.Object passThroughModelName;
            java.lang.Object serviceId;
            java.lang.Object targetModelName;

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getPassThroughModelName}
             * @param passThroughModelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughModelName(java.lang.Boolean passThroughModelName) {
                this.passThroughModelName = passThroughModelName;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getPassThroughModelName}
             * @param passThroughModelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passThroughModelName(com.aliyun.ros.cdk.core.IResolvable passThroughModelName) {
                this.passThroughModelName = passThroughModelName;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getTargetModelName}
             * @param targetModelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetModelName(java.lang.String targetModelName) {
                this.targetModelName = targetModelName;
                return this;
            }

            /**
             * Sets the value of {@link AiFallbackConfigServiceConfigsProperty#getTargetModelName}
             * @param targetModelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetModelName(com.aliyun.ros.cdk.core.IResolvable targetModelName) {
                this.targetModelName = targetModelName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiFallbackConfigServiceConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiFallbackConfigServiceConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiFallbackConfigServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiFallbackConfigServiceConfigsProperty {
            private final java.lang.Object name;
            private final java.lang.Object passThroughModelName;
            private final java.lang.Object serviceId;
            private final java.lang.Object targetModelName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passThroughModelName = software.amazon.jsii.Kernel.get(this, "passThroughModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetModelName = software.amazon.jsii.Kernel.get(this, "targetModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.passThroughModelName = builder.passThroughModelName;
                this.serviceId = builder.serviceId;
                this.targetModelName = builder.targetModelName;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getPassThroughModelName() {
                return this.passThroughModelName;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getTargetModelName() {
                return this.targetModelName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getPassThroughModelName() != null) {
                    data.set("passThroughModelName", om.valueToTree(this.getPassThroughModelName()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getTargetModelName() != null) {
                    data.set("targetModelName", om.valueToTree(this.getTargetModelName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiFallbackConfigServiceConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiFallbackConfigServiceConfigsProperty.Jsii$Proxy that = (AiFallbackConfigServiceConfigsProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.passThroughModelName != null ? !this.passThroughModelName.equals(that.passThroughModelName) : that.passThroughModelName != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                return this.targetModelName != null ? this.targetModelName.equals(that.targetModelName) : that.targetModelName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.passThroughModelName != null ? this.passThroughModelName.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.targetModelName != null ? this.targetModelName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiNetworkSearchConfigPluginStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(AiNetworkSearchConfigPluginStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiNetworkSearchConfigPluginStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorLogs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHealthy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiNetworkSearchConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiNetworkSearchConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiNetworkSearchConfigPluginStatusProperty> {
            java.lang.Object errorLogs;
            java.lang.Object pluginId;
            java.lang.Object serviceHealthy;

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(java.lang.String errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(com.aliyun.ros.cdk.core.IResolvable errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(java.lang.Boolean serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(com.aliyun.ros.cdk.core.IResolvable serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiNetworkSearchConfigPluginStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiNetworkSearchConfigPluginStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiNetworkSearchConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiNetworkSearchConfigPluginStatusProperty {
            private final java.lang.Object errorLogs;
            private final java.lang.Object pluginId;
            private final java.lang.Object serviceHealthy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorLogs = software.amazon.jsii.Kernel.get(this, "errorLogs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHealthy = software.amazon.jsii.Kernel.get(this, "serviceHealthy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorLogs = builder.errorLogs;
                this.pluginId = builder.pluginId;
                this.serviceHealthy = builder.serviceHealthy;
            }

            @Override
            public final java.lang.Object getErrorLogs() {
                return this.errorLogs;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getServiceHealthy() {
                return this.serviceHealthy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorLogs() != null) {
                    data.set("errorLogs", om.valueToTree(this.getErrorLogs()));
                }
                if (this.getPluginId() != null) {
                    data.set("pluginId", om.valueToTree(this.getPluginId()));
                }
                if (this.getServiceHealthy() != null) {
                    data.set("serviceHealthy", om.valueToTree(this.getServiceHealthy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiNetworkSearchConfigPluginStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiNetworkSearchConfigPluginStatusProperty.Jsii$Proxy that = (AiNetworkSearchConfigPluginStatusProperty.Jsii$Proxy) o;

                if (this.errorLogs != null ? !this.errorLogs.equals(that.errorLogs) : that.errorLogs != null) return false;
                if (this.pluginId != null ? !this.pluginId.equals(that.pluginId) : that.pluginId != null) return false;
                return this.serviceHealthy != null ? this.serviceHealthy.equals(that.serviceHealthy) : that.serviceHealthy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorLogs != null ? this.errorLogs.hashCode() : 0;
                result = 31 * result + (this.pluginId != null ? this.pluginId.hashCode() : 0);
                result = 31 * result + (this.serviceHealthy != null ? this.serviceHealthy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiNetworkSearchConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiNetworkSearchConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiNetworkSearchConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLang() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNeedReference() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReferenceFormat() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReferenceLocation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSearchEngineConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSearchFrom() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSearchRewrite() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiNetworkSearchConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiNetworkSearchConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiNetworkSearchConfigProperty> {
            java.lang.Object defaultEnable;
            java.lang.Object defaultLang;
            java.lang.Object needReference;
            java.lang.Object pluginStatus;
            java.lang.Object referenceFormat;
            java.lang.Object referenceLocation;
            java.lang.Object searchEngineConfig;
            java.lang.Object searchFrom;
            java.lang.Object searchRewrite;

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getDefaultEnable}
             * @param defaultEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultEnable(java.lang.Boolean defaultEnable) {
                this.defaultEnable = defaultEnable;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getDefaultEnable}
             * @param defaultEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultEnable(com.aliyun.ros.cdk.core.IResolvable defaultEnable) {
                this.defaultEnable = defaultEnable;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getDefaultLang}
             * @param defaultLang the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultLang(java.lang.String defaultLang) {
                this.defaultLang = defaultLang;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getDefaultLang}
             * @param defaultLang the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultLang(com.aliyun.ros.cdk.core.IResolvable defaultLang) {
                this.defaultLang = defaultLang;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getNeedReference}
             * @param needReference the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder needReference(java.lang.Boolean needReference) {
                this.needReference = needReference;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getNeedReference}
             * @param needReference the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder needReference(com.aliyun.ros.cdk.core.IResolvable needReference) {
                this.needReference = needReference;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.core.IResolvable pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.apig.RosHttpApi.AiNetworkSearchConfigPluginStatusProperty pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getReferenceFormat}
             * @param referenceFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder referenceFormat(java.lang.String referenceFormat) {
                this.referenceFormat = referenceFormat;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getReferenceFormat}
             * @param referenceFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder referenceFormat(com.aliyun.ros.cdk.core.IResolvable referenceFormat) {
                this.referenceFormat = referenceFormat;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getReferenceLocation}
             * @param referenceLocation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder referenceLocation(java.lang.String referenceLocation) {
                this.referenceLocation = referenceLocation;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getReferenceLocation}
             * @param referenceLocation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder referenceLocation(com.aliyun.ros.cdk.core.IResolvable referenceLocation) {
                this.referenceLocation = referenceLocation;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchEngineConfig}
             * @param searchEngineConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchEngineConfig(com.aliyun.ros.cdk.core.IResolvable searchEngineConfig) {
                this.searchEngineConfig = searchEngineConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchEngineConfig}
             * @param searchEngineConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchEngineConfig(com.aliyun.ros.cdk.apig.RosHttpApi.SearchEngineConfigProperty searchEngineConfig) {
                this.searchEngineConfig = searchEngineConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchFrom}
             * @param searchFrom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchFrom(com.aliyun.ros.cdk.core.IResolvable searchFrom) {
                this.searchFrom = searchFrom;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchFrom}
             * @param searchFrom the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchFrom(com.aliyun.ros.cdk.apig.RosHttpApi.SearchFromProperty searchFrom) {
                this.searchFrom = searchFrom;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchRewrite}
             * @param searchRewrite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchRewrite(com.aliyun.ros.cdk.core.IResolvable searchRewrite) {
                this.searchRewrite = searchRewrite;
                return this;
            }

            /**
             * Sets the value of {@link AiNetworkSearchConfigProperty#getSearchRewrite}
             * @param searchRewrite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder searchRewrite(com.aliyun.ros.cdk.apig.RosHttpApi.SearchRewriteProperty searchRewrite) {
                this.searchRewrite = searchRewrite;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiNetworkSearchConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiNetworkSearchConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiNetworkSearchConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiNetworkSearchConfigProperty {
            private final java.lang.Object defaultEnable;
            private final java.lang.Object defaultLang;
            private final java.lang.Object needReference;
            private final java.lang.Object pluginStatus;
            private final java.lang.Object referenceFormat;
            private final java.lang.Object referenceLocation;
            private final java.lang.Object searchEngineConfig;
            private final java.lang.Object searchFrom;
            private final java.lang.Object searchRewrite;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.defaultEnable = software.amazon.jsii.Kernel.get(this, "defaultEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.defaultLang = software.amazon.jsii.Kernel.get(this, "defaultLang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.needReference = software.amazon.jsii.Kernel.get(this, "needReference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginStatus = software.amazon.jsii.Kernel.get(this, "pluginStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.referenceFormat = software.amazon.jsii.Kernel.get(this, "referenceFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.referenceLocation = software.amazon.jsii.Kernel.get(this, "referenceLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.searchEngineConfig = software.amazon.jsii.Kernel.get(this, "searchEngineConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.searchFrom = software.amazon.jsii.Kernel.get(this, "searchFrom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.searchRewrite = software.amazon.jsii.Kernel.get(this, "searchRewrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.defaultEnable = builder.defaultEnable;
                this.defaultLang = builder.defaultLang;
                this.needReference = builder.needReference;
                this.pluginStatus = builder.pluginStatus;
                this.referenceFormat = builder.referenceFormat;
                this.referenceLocation = builder.referenceLocation;
                this.searchEngineConfig = builder.searchEngineConfig;
                this.searchFrom = builder.searchFrom;
                this.searchRewrite = builder.searchRewrite;
            }

            @Override
            public final java.lang.Object getDefaultEnable() {
                return this.defaultEnable;
            }

            @Override
            public final java.lang.Object getDefaultLang() {
                return this.defaultLang;
            }

            @Override
            public final java.lang.Object getNeedReference() {
                return this.needReference;
            }

            @Override
            public final java.lang.Object getPluginStatus() {
                return this.pluginStatus;
            }

            @Override
            public final java.lang.Object getReferenceFormat() {
                return this.referenceFormat;
            }

            @Override
            public final java.lang.Object getReferenceLocation() {
                return this.referenceLocation;
            }

            @Override
            public final java.lang.Object getSearchEngineConfig() {
                return this.searchEngineConfig;
            }

            @Override
            public final java.lang.Object getSearchFrom() {
                return this.searchFrom;
            }

            @Override
            public final java.lang.Object getSearchRewrite() {
                return this.searchRewrite;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDefaultEnable() != null) {
                    data.set("defaultEnable", om.valueToTree(this.getDefaultEnable()));
                }
                if (this.getDefaultLang() != null) {
                    data.set("defaultLang", om.valueToTree(this.getDefaultLang()));
                }
                if (this.getNeedReference() != null) {
                    data.set("needReference", om.valueToTree(this.getNeedReference()));
                }
                if (this.getPluginStatus() != null) {
                    data.set("pluginStatus", om.valueToTree(this.getPluginStatus()));
                }
                if (this.getReferenceFormat() != null) {
                    data.set("referenceFormat", om.valueToTree(this.getReferenceFormat()));
                }
                if (this.getReferenceLocation() != null) {
                    data.set("referenceLocation", om.valueToTree(this.getReferenceLocation()));
                }
                if (this.getSearchEngineConfig() != null) {
                    data.set("searchEngineConfig", om.valueToTree(this.getSearchEngineConfig()));
                }
                if (this.getSearchFrom() != null) {
                    data.set("searchFrom", om.valueToTree(this.getSearchFrom()));
                }
                if (this.getSearchRewrite() != null) {
                    data.set("searchRewrite", om.valueToTree(this.getSearchRewrite()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiNetworkSearchConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiNetworkSearchConfigProperty.Jsii$Proxy that = (AiNetworkSearchConfigProperty.Jsii$Proxy) o;

                if (this.defaultEnable != null ? !this.defaultEnable.equals(that.defaultEnable) : that.defaultEnable != null) return false;
                if (this.defaultLang != null ? !this.defaultLang.equals(that.defaultLang) : that.defaultLang != null) return false;
                if (this.needReference != null ? !this.needReference.equals(that.needReference) : that.needReference != null) return false;
                if (this.pluginStatus != null ? !this.pluginStatus.equals(that.pluginStatus) : that.pluginStatus != null) return false;
                if (this.referenceFormat != null ? !this.referenceFormat.equals(that.referenceFormat) : that.referenceFormat != null) return false;
                if (this.referenceLocation != null ? !this.referenceLocation.equals(that.referenceLocation) : that.referenceLocation != null) return false;
                if (this.searchEngineConfig != null ? !this.searchEngineConfig.equals(that.searchEngineConfig) : that.searchEngineConfig != null) return false;
                if (this.searchFrom != null ? !this.searchFrom.equals(that.searchFrom) : that.searchFrom != null) return false;
                return this.searchRewrite != null ? this.searchRewrite.equals(that.searchRewrite) : that.searchRewrite == null;
            }

            @Override
            public final int hashCode() {
                int result = this.defaultEnable != null ? this.defaultEnable.hashCode() : 0;
                result = 31 * result + (this.defaultLang != null ? this.defaultLang.hashCode() : 0);
                result = 31 * result + (this.needReference != null ? this.needReference.hashCode() : 0);
                result = 31 * result + (this.pluginStatus != null ? this.pluginStatus.hashCode() : 0);
                result = 31 * result + (this.referenceFormat != null ? this.referenceFormat.hashCode() : 0);
                result = 31 * result + (this.referenceLocation != null ? this.referenceLocation.hashCode() : 0);
                result = 31 * result + (this.searchEngineConfig != null ? this.searchEngineConfig.hashCode() : 0);
                result = 31 * result + (this.searchFrom != null ? this.searchFrom.hashCode() : 0);
                result = 31 * result + (this.searchRewrite != null ? this.searchRewrite.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiSecurityGuardConfigPluginStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(AiSecurityGuardConfigPluginStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiSecurityGuardConfigPluginStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorLogs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHealthy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiSecurityGuardConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiSecurityGuardConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiSecurityGuardConfigPluginStatusProperty> {
            java.lang.Object errorLogs;
            java.lang.Object pluginId;
            java.lang.Object serviceHealthy;

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(java.lang.String errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(com.aliyun.ros.cdk.core.IResolvable errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(java.lang.Boolean serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(com.aliyun.ros.cdk.core.IResolvable serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiSecurityGuardConfigPluginStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiSecurityGuardConfigPluginStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiSecurityGuardConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiSecurityGuardConfigPluginStatusProperty {
            private final java.lang.Object errorLogs;
            private final java.lang.Object pluginId;
            private final java.lang.Object serviceHealthy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorLogs = software.amazon.jsii.Kernel.get(this, "errorLogs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHealthy = software.amazon.jsii.Kernel.get(this, "serviceHealthy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorLogs = builder.errorLogs;
                this.pluginId = builder.pluginId;
                this.serviceHealthy = builder.serviceHealthy;
            }

            @Override
            public final java.lang.Object getErrorLogs() {
                return this.errorLogs;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getServiceHealthy() {
                return this.serviceHealthy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorLogs() != null) {
                    data.set("errorLogs", om.valueToTree(this.getErrorLogs()));
                }
                if (this.getPluginId() != null) {
                    data.set("pluginId", om.valueToTree(this.getPluginId()));
                }
                if (this.getServiceHealthy() != null) {
                    data.set("serviceHealthy", om.valueToTree(this.getServiceHealthy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiSecurityGuardConfigPluginStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiSecurityGuardConfigPluginStatusProperty.Jsii$Proxy that = (AiSecurityGuardConfigPluginStatusProperty.Jsii$Proxy) o;

                if (this.errorLogs != null ? !this.errorLogs.equals(that.errorLogs) : that.errorLogs != null) return false;
                if (this.pluginId != null ? !this.pluginId.equals(that.pluginId) : that.pluginId != null) return false;
                return this.serviceHealthy != null ? this.serviceHealthy.equals(that.serviceHealthy) : that.serviceHealthy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorLogs != null ? this.errorLogs.hashCode() : 0;
                result = 31 * result + (this.pluginId != null ? this.pluginId.hashCode() : 0);
                result = 31 * result + (this.serviceHealthy != null ? this.serviceHealthy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiSecurityGuardConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiSecurityGuardConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiSecurityGuardConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBufferLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckRequest() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckRequestImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckResponse() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCheckResponseImage() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsumerRequestCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsumerResponseCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsumerRiskLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequestCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequestImageCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseImageCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRiskAlertLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRiskConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceAddress() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiSecurityGuardConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiSecurityGuardConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiSecurityGuardConfigProperty> {
            java.lang.Object bufferLimit;
            java.lang.Object checkRequest;
            java.lang.Object checkRequestImage;
            java.lang.Object checkResponse;
            java.lang.Object checkResponseImage;
            java.lang.Object consumerRequestCheckService;
            java.lang.Object consumerResponseCheckService;
            java.lang.Object consumerRiskLevel;
            java.lang.Object pluginStatus;
            java.lang.Object requestCheckService;
            java.lang.Object requestImageCheckService;
            java.lang.Object responseCheckService;
            java.lang.Object responseImageCheckService;
            java.lang.Object riskAlertLevel;
            java.lang.Object riskConfig;
            java.lang.Object serviceAddress;

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getBufferLimit}
             * @param bufferLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferLimit(java.lang.Number bufferLimit) {
                this.bufferLimit = bufferLimit;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getBufferLimit}
             * @param bufferLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferLimit(com.aliyun.ros.cdk.core.IResolvable bufferLimit) {
                this.bufferLimit = bufferLimit;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckRequest}
             * @param checkRequest the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkRequest(java.lang.Boolean checkRequest) {
                this.checkRequest = checkRequest;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckRequest}
             * @param checkRequest the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkRequest(com.aliyun.ros.cdk.core.IResolvable checkRequest) {
                this.checkRequest = checkRequest;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckRequestImage}
             * @param checkRequestImage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkRequestImage(java.lang.Boolean checkRequestImage) {
                this.checkRequestImage = checkRequestImage;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckRequestImage}
             * @param checkRequestImage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkRequestImage(com.aliyun.ros.cdk.core.IResolvable checkRequestImage) {
                this.checkRequestImage = checkRequestImage;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckResponse}
             * @param checkResponse the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkResponse(java.lang.Boolean checkResponse) {
                this.checkResponse = checkResponse;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckResponse}
             * @param checkResponse the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkResponse(com.aliyun.ros.cdk.core.IResolvable checkResponse) {
                this.checkResponse = checkResponse;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckResponseImage}
             * @param checkResponseImage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkResponseImage(java.lang.Boolean checkResponseImage) {
                this.checkResponseImage = checkResponseImage;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getCheckResponseImage}
             * @param checkResponseImage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkResponseImage(com.aliyun.ros.cdk.core.IResolvable checkResponseImage) {
                this.checkResponseImage = checkResponseImage;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerRequestCheckService}
             * @param consumerRequestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRequestCheckService(com.aliyun.ros.cdk.core.IResolvable consumerRequestCheckService) {
                this.consumerRequestCheckService = consumerRequestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerRequestCheckService}
             * @param consumerRequestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRequestCheckService(java.util.List<? extends java.lang.Object> consumerRequestCheckService) {
                this.consumerRequestCheckService = consumerRequestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerResponseCheckService}
             * @param consumerResponseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerResponseCheckService(com.aliyun.ros.cdk.core.IResolvable consumerResponseCheckService) {
                this.consumerResponseCheckService = consumerResponseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerResponseCheckService}
             * @param consumerResponseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerResponseCheckService(java.util.List<? extends java.lang.Object> consumerResponseCheckService) {
                this.consumerResponseCheckService = consumerResponseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerRiskLevel}
             * @param consumerRiskLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRiskLevel(com.aliyun.ros.cdk.core.IResolvable consumerRiskLevel) {
                this.consumerRiskLevel = consumerRiskLevel;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getConsumerRiskLevel}
             * @param consumerRiskLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRiskLevel(java.util.List<? extends java.lang.Object> consumerRiskLevel) {
                this.consumerRiskLevel = consumerRiskLevel;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.core.IResolvable pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.apig.RosHttpApi.AiSecurityGuardConfigPluginStatusProperty pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRequestCheckService}
             * @param requestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestCheckService(java.lang.String requestCheckService) {
                this.requestCheckService = requestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRequestCheckService}
             * @param requestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestCheckService(com.aliyun.ros.cdk.core.IResolvable requestCheckService) {
                this.requestCheckService = requestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRequestImageCheckService}
             * @param requestImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestImageCheckService(java.lang.String requestImageCheckService) {
                this.requestImageCheckService = requestImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRequestImageCheckService}
             * @param requestImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestImageCheckService(com.aliyun.ros.cdk.core.IResolvable requestImageCheckService) {
                this.requestImageCheckService = requestImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getResponseCheckService}
             * @param responseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCheckService(java.lang.String responseCheckService) {
                this.responseCheckService = responseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getResponseCheckService}
             * @param responseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCheckService(com.aliyun.ros.cdk.core.IResolvable responseCheckService) {
                this.responseCheckService = responseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getResponseImageCheckService}
             * @param responseImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseImageCheckService(java.lang.String responseImageCheckService) {
                this.responseImageCheckService = responseImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getResponseImageCheckService}
             * @param responseImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseImageCheckService(com.aliyun.ros.cdk.core.IResolvable responseImageCheckService) {
                this.responseImageCheckService = responseImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRiskAlertLevel}
             * @param riskAlertLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskAlertLevel(java.lang.String riskAlertLevel) {
                this.riskAlertLevel = riskAlertLevel;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRiskAlertLevel}
             * @param riskAlertLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskAlertLevel(com.aliyun.ros.cdk.core.IResolvable riskAlertLevel) {
                this.riskAlertLevel = riskAlertLevel;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRiskConfig}
             * @param riskConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskConfig(com.aliyun.ros.cdk.core.IResolvable riskConfig) {
                this.riskConfig = riskConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getRiskConfig}
             * @param riskConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder riskConfig(java.util.List<? extends java.lang.Object> riskConfig) {
                this.riskConfig = riskConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getServiceAddress}
             * @param serviceAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceAddress(java.lang.String serviceAddress) {
                this.serviceAddress = serviceAddress;
                return this;
            }

            /**
             * Sets the value of {@link AiSecurityGuardConfigProperty#getServiceAddress}
             * @param serviceAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceAddress(com.aliyun.ros.cdk.core.IResolvable serviceAddress) {
                this.serviceAddress = serviceAddress;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiSecurityGuardConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiSecurityGuardConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiSecurityGuardConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiSecurityGuardConfigProperty {
            private final java.lang.Object bufferLimit;
            private final java.lang.Object checkRequest;
            private final java.lang.Object checkRequestImage;
            private final java.lang.Object checkResponse;
            private final java.lang.Object checkResponseImage;
            private final java.lang.Object consumerRequestCheckService;
            private final java.lang.Object consumerResponseCheckService;
            private final java.lang.Object consumerRiskLevel;
            private final java.lang.Object pluginStatus;
            private final java.lang.Object requestCheckService;
            private final java.lang.Object requestImageCheckService;
            private final java.lang.Object responseCheckService;
            private final java.lang.Object responseImageCheckService;
            private final java.lang.Object riskAlertLevel;
            private final java.lang.Object riskConfig;
            private final java.lang.Object serviceAddress;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bufferLimit = software.amazon.jsii.Kernel.get(this, "bufferLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkRequest = software.amazon.jsii.Kernel.get(this, "checkRequest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkRequestImage = software.amazon.jsii.Kernel.get(this, "checkRequestImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkResponse = software.amazon.jsii.Kernel.get(this, "checkResponse", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkResponseImage = software.amazon.jsii.Kernel.get(this, "checkResponseImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consumerRequestCheckService = software.amazon.jsii.Kernel.get(this, "consumerRequestCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consumerResponseCheckService = software.amazon.jsii.Kernel.get(this, "consumerResponseCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consumerRiskLevel = software.amazon.jsii.Kernel.get(this, "consumerRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginStatus = software.amazon.jsii.Kernel.get(this, "pluginStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestCheckService = software.amazon.jsii.Kernel.get(this, "requestCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestImageCheckService = software.amazon.jsii.Kernel.get(this, "requestImageCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseCheckService = software.amazon.jsii.Kernel.get(this, "responseCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseImageCheckService = software.amazon.jsii.Kernel.get(this, "responseImageCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.riskAlertLevel = software.amazon.jsii.Kernel.get(this, "riskAlertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.riskConfig = software.amazon.jsii.Kernel.get(this, "riskConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceAddress = software.amazon.jsii.Kernel.get(this, "serviceAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bufferLimit = builder.bufferLimit;
                this.checkRequest = builder.checkRequest;
                this.checkRequestImage = builder.checkRequestImage;
                this.checkResponse = builder.checkResponse;
                this.checkResponseImage = builder.checkResponseImage;
                this.consumerRequestCheckService = builder.consumerRequestCheckService;
                this.consumerResponseCheckService = builder.consumerResponseCheckService;
                this.consumerRiskLevel = builder.consumerRiskLevel;
                this.pluginStatus = builder.pluginStatus;
                this.requestCheckService = builder.requestCheckService;
                this.requestImageCheckService = builder.requestImageCheckService;
                this.responseCheckService = builder.responseCheckService;
                this.responseImageCheckService = builder.responseImageCheckService;
                this.riskAlertLevel = builder.riskAlertLevel;
                this.riskConfig = builder.riskConfig;
                this.serviceAddress = builder.serviceAddress;
            }

            @Override
            public final java.lang.Object getBufferLimit() {
                return this.bufferLimit;
            }

            @Override
            public final java.lang.Object getCheckRequest() {
                return this.checkRequest;
            }

            @Override
            public final java.lang.Object getCheckRequestImage() {
                return this.checkRequestImage;
            }

            @Override
            public final java.lang.Object getCheckResponse() {
                return this.checkResponse;
            }

            @Override
            public final java.lang.Object getCheckResponseImage() {
                return this.checkResponseImage;
            }

            @Override
            public final java.lang.Object getConsumerRequestCheckService() {
                return this.consumerRequestCheckService;
            }

            @Override
            public final java.lang.Object getConsumerResponseCheckService() {
                return this.consumerResponseCheckService;
            }

            @Override
            public final java.lang.Object getConsumerRiskLevel() {
                return this.consumerRiskLevel;
            }

            @Override
            public final java.lang.Object getPluginStatus() {
                return this.pluginStatus;
            }

            @Override
            public final java.lang.Object getRequestCheckService() {
                return this.requestCheckService;
            }

            @Override
            public final java.lang.Object getRequestImageCheckService() {
                return this.requestImageCheckService;
            }

            @Override
            public final java.lang.Object getResponseCheckService() {
                return this.responseCheckService;
            }

            @Override
            public final java.lang.Object getResponseImageCheckService() {
                return this.responseImageCheckService;
            }

            @Override
            public final java.lang.Object getRiskAlertLevel() {
                return this.riskAlertLevel;
            }

            @Override
            public final java.lang.Object getRiskConfig() {
                return this.riskConfig;
            }

            @Override
            public final java.lang.Object getServiceAddress() {
                return this.serviceAddress;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBufferLimit() != null) {
                    data.set("bufferLimit", om.valueToTree(this.getBufferLimit()));
                }
                if (this.getCheckRequest() != null) {
                    data.set("checkRequest", om.valueToTree(this.getCheckRequest()));
                }
                if (this.getCheckRequestImage() != null) {
                    data.set("checkRequestImage", om.valueToTree(this.getCheckRequestImage()));
                }
                if (this.getCheckResponse() != null) {
                    data.set("checkResponse", om.valueToTree(this.getCheckResponse()));
                }
                if (this.getCheckResponseImage() != null) {
                    data.set("checkResponseImage", om.valueToTree(this.getCheckResponseImage()));
                }
                if (this.getConsumerRequestCheckService() != null) {
                    data.set("consumerRequestCheckService", om.valueToTree(this.getConsumerRequestCheckService()));
                }
                if (this.getConsumerResponseCheckService() != null) {
                    data.set("consumerResponseCheckService", om.valueToTree(this.getConsumerResponseCheckService()));
                }
                if (this.getConsumerRiskLevel() != null) {
                    data.set("consumerRiskLevel", om.valueToTree(this.getConsumerRiskLevel()));
                }
                if (this.getPluginStatus() != null) {
                    data.set("pluginStatus", om.valueToTree(this.getPluginStatus()));
                }
                if (this.getRequestCheckService() != null) {
                    data.set("requestCheckService", om.valueToTree(this.getRequestCheckService()));
                }
                if (this.getRequestImageCheckService() != null) {
                    data.set("requestImageCheckService", om.valueToTree(this.getRequestImageCheckService()));
                }
                if (this.getResponseCheckService() != null) {
                    data.set("responseCheckService", om.valueToTree(this.getResponseCheckService()));
                }
                if (this.getResponseImageCheckService() != null) {
                    data.set("responseImageCheckService", om.valueToTree(this.getResponseImageCheckService()));
                }
                if (this.getRiskAlertLevel() != null) {
                    data.set("riskAlertLevel", om.valueToTree(this.getRiskAlertLevel()));
                }
                if (this.getRiskConfig() != null) {
                    data.set("riskConfig", om.valueToTree(this.getRiskConfig()));
                }
                if (this.getServiceAddress() != null) {
                    data.set("serviceAddress", om.valueToTree(this.getServiceAddress()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiSecurityGuardConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiSecurityGuardConfigProperty.Jsii$Proxy that = (AiSecurityGuardConfigProperty.Jsii$Proxy) o;

                if (this.bufferLimit != null ? !this.bufferLimit.equals(that.bufferLimit) : that.bufferLimit != null) return false;
                if (this.checkRequest != null ? !this.checkRequest.equals(that.checkRequest) : that.checkRequest != null) return false;
                if (this.checkRequestImage != null ? !this.checkRequestImage.equals(that.checkRequestImage) : that.checkRequestImage != null) return false;
                if (this.checkResponse != null ? !this.checkResponse.equals(that.checkResponse) : that.checkResponse != null) return false;
                if (this.checkResponseImage != null ? !this.checkResponseImage.equals(that.checkResponseImage) : that.checkResponseImage != null) return false;
                if (this.consumerRequestCheckService != null ? !this.consumerRequestCheckService.equals(that.consumerRequestCheckService) : that.consumerRequestCheckService != null) return false;
                if (this.consumerResponseCheckService != null ? !this.consumerResponseCheckService.equals(that.consumerResponseCheckService) : that.consumerResponseCheckService != null) return false;
                if (this.consumerRiskLevel != null ? !this.consumerRiskLevel.equals(that.consumerRiskLevel) : that.consumerRiskLevel != null) return false;
                if (this.pluginStatus != null ? !this.pluginStatus.equals(that.pluginStatus) : that.pluginStatus != null) return false;
                if (this.requestCheckService != null ? !this.requestCheckService.equals(that.requestCheckService) : that.requestCheckService != null) return false;
                if (this.requestImageCheckService != null ? !this.requestImageCheckService.equals(that.requestImageCheckService) : that.requestImageCheckService != null) return false;
                if (this.responseCheckService != null ? !this.responseCheckService.equals(that.responseCheckService) : that.responseCheckService != null) return false;
                if (this.responseImageCheckService != null ? !this.responseImageCheckService.equals(that.responseImageCheckService) : that.responseImageCheckService != null) return false;
                if (this.riskAlertLevel != null ? !this.riskAlertLevel.equals(that.riskAlertLevel) : that.riskAlertLevel != null) return false;
                if (this.riskConfig != null ? !this.riskConfig.equals(that.riskConfig) : that.riskConfig != null) return false;
                return this.serviceAddress != null ? this.serviceAddress.equals(that.serviceAddress) : that.serviceAddress == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bufferLimit != null ? this.bufferLimit.hashCode() : 0;
                result = 31 * result + (this.checkRequest != null ? this.checkRequest.hashCode() : 0);
                result = 31 * result + (this.checkRequestImage != null ? this.checkRequestImage.hashCode() : 0);
                result = 31 * result + (this.checkResponse != null ? this.checkResponse.hashCode() : 0);
                result = 31 * result + (this.checkResponseImage != null ? this.checkResponseImage.hashCode() : 0);
                result = 31 * result + (this.consumerRequestCheckService != null ? this.consumerRequestCheckService.hashCode() : 0);
                result = 31 * result + (this.consumerResponseCheckService != null ? this.consumerResponseCheckService.hashCode() : 0);
                result = 31 * result + (this.consumerRiskLevel != null ? this.consumerRiskLevel.hashCode() : 0);
                result = 31 * result + (this.pluginStatus != null ? this.pluginStatus.hashCode() : 0);
                result = 31 * result + (this.requestCheckService != null ? this.requestCheckService.hashCode() : 0);
                result = 31 * result + (this.requestImageCheckService != null ? this.requestImageCheckService.hashCode() : 0);
                result = 31 * result + (this.responseCheckService != null ? this.responseCheckService.hashCode() : 0);
                result = 31 * result + (this.responseImageCheckService != null ? this.responseImageCheckService.hashCode() : 0);
                result = 31 * result + (this.riskAlertLevel != null ? this.riskAlertLevel.hashCode() : 0);
                result = 31 * result + (this.riskConfig != null ? this.riskConfig.hashCode() : 0);
                result = 31 * result + (this.serviceAddress != null ? this.serviceAddress.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiStatisticsConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiStatisticsConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiStatisticsConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogRequestContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogResponseContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathFieldConfigs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiStatisticsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiStatisticsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiStatisticsConfigProperty> {
            java.lang.Object logRequestContent;
            java.lang.Object logResponseContent;
            java.lang.Object pathFieldConfigs;

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getLogRequestContent}
             * @param logRequestContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logRequestContent(java.lang.Boolean logRequestContent) {
                this.logRequestContent = logRequestContent;
                return this;
            }

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getLogRequestContent}
             * @param logRequestContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logRequestContent(com.aliyun.ros.cdk.core.IResolvable logRequestContent) {
                this.logRequestContent = logRequestContent;
                return this;
            }

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getLogResponseContent}
             * @param logResponseContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logResponseContent(java.lang.Boolean logResponseContent) {
                this.logResponseContent = logResponseContent;
                return this;
            }

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getLogResponseContent}
             * @param logResponseContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logResponseContent(com.aliyun.ros.cdk.core.IResolvable logResponseContent) {
                this.logResponseContent = logResponseContent;
                return this;
            }

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getPathFieldConfigs}
             * @param pathFieldConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFieldConfigs(com.aliyun.ros.cdk.core.IResolvable pathFieldConfigs) {
                this.pathFieldConfigs = pathFieldConfigs;
                return this;
            }

            /**
             * Sets the value of {@link AiStatisticsConfigProperty#getPathFieldConfigs}
             * @param pathFieldConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFieldConfigs(java.util.List<? extends java.lang.Object> pathFieldConfigs) {
                this.pathFieldConfigs = pathFieldConfigs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiStatisticsConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiStatisticsConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiStatisticsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiStatisticsConfigProperty {
            private final java.lang.Object logRequestContent;
            private final java.lang.Object logResponseContent;
            private final java.lang.Object pathFieldConfigs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logRequestContent = software.amazon.jsii.Kernel.get(this, "logRequestContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logResponseContent = software.amazon.jsii.Kernel.get(this, "logResponseContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathFieldConfigs = software.amazon.jsii.Kernel.get(this, "pathFieldConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logRequestContent = builder.logRequestContent;
                this.logResponseContent = builder.logResponseContent;
                this.pathFieldConfigs = builder.pathFieldConfigs;
            }

            @Override
            public final java.lang.Object getLogRequestContent() {
                return this.logRequestContent;
            }

            @Override
            public final java.lang.Object getLogResponseContent() {
                return this.logResponseContent;
            }

            @Override
            public final java.lang.Object getPathFieldConfigs() {
                return this.pathFieldConfigs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLogRequestContent() != null) {
                    data.set("logRequestContent", om.valueToTree(this.getLogRequestContent()));
                }
                if (this.getLogResponseContent() != null) {
                    data.set("logResponseContent", om.valueToTree(this.getLogResponseContent()));
                }
                if (this.getPathFieldConfigs() != null) {
                    data.set("pathFieldConfigs", om.valueToTree(this.getPathFieldConfigs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiStatisticsConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiStatisticsConfigProperty.Jsii$Proxy that = (AiStatisticsConfigProperty.Jsii$Proxy) o;

                if (this.logRequestContent != null ? !this.logRequestContent.equals(that.logRequestContent) : that.logRequestContent != null) return false;
                if (this.logResponseContent != null ? !this.logResponseContent.equals(that.logResponseContent) : that.logResponseContent != null) return false;
                return this.pathFieldConfigs != null ? this.pathFieldConfigs.equals(that.pathFieldConfigs) : that.pathFieldConfigs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logRequestContent != null ? this.logRequestContent.hashCode() : 0;
                result = 31 * result + (this.logResponseContent != null ? this.logResponseContent.hashCode() : 0);
                result = 31 * result + (this.pathFieldConfigs != null ? this.pathFieldConfigs.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigPluginStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(AiTokenRateLimitConfigPluginStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiTokenRateLimitConfigPluginStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorLogs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHealthy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiTokenRateLimitConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiTokenRateLimitConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiTokenRateLimitConfigPluginStatusProperty> {
            java.lang.Object errorLogs;
            java.lang.Object pluginId;
            java.lang.Object serviceHealthy;

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(java.lang.String errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(com.aliyun.ros.cdk.core.IResolvable errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(java.lang.Boolean serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(com.aliyun.ros.cdk.core.IResolvable serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiTokenRateLimitConfigPluginStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiTokenRateLimitConfigPluginStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiTokenRateLimitConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiTokenRateLimitConfigPluginStatusProperty {
            private final java.lang.Object errorLogs;
            private final java.lang.Object pluginId;
            private final java.lang.Object serviceHealthy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorLogs = software.amazon.jsii.Kernel.get(this, "errorLogs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHealthy = software.amazon.jsii.Kernel.get(this, "serviceHealthy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorLogs = builder.errorLogs;
                this.pluginId = builder.pluginId;
                this.serviceHealthy = builder.serviceHealthy;
            }

            @Override
            public final java.lang.Object getErrorLogs() {
                return this.errorLogs;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getServiceHealthy() {
                return this.serviceHealthy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorLogs() != null) {
                    data.set("errorLogs", om.valueToTree(this.getErrorLogs()));
                }
                if (this.getPluginId() != null) {
                    data.set("pluginId", om.valueToTree(this.getPluginId()));
                }
                if (this.getServiceHealthy() != null) {
                    data.set("serviceHealthy", om.valueToTree(this.getServiceHealthy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigPluginStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiTokenRateLimitConfigPluginStatusProperty.Jsii$Proxy that = (AiTokenRateLimitConfigPluginStatusProperty.Jsii$Proxy) o;

                if (this.errorLogs != null ? !this.errorLogs.equals(that.errorLogs) : that.errorLogs != null) return false;
                if (this.pluginId != null ? !this.pluginId.equals(that.pluginId) : that.pluginId != null) return false;
                return this.serviceHealthy != null ? this.serviceHealthy.equals(that.serviceHealthy) : that.serviceHealthy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorLogs != null ? this.errorLogs.hashCode() : 0;
                result = 31 * result + (this.pluginId != null ? this.pluginId.hashCode() : 0);
                result = 31 * result + (this.serviceHealthy != null ? this.serviceHealthy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiTokenRateLimitConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiTokenRateLimitConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableGlobalRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGlobalRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRedisConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiTokenRateLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiTokenRateLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiTokenRateLimitConfigProperty> {
            java.lang.Object enableGlobalRules;
            java.lang.Object globalRules;
            java.lang.Object pluginStatus;
            java.lang.Object redisConfig;
            java.lang.Object rules;

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getEnableGlobalRules}
             * @param enableGlobalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableGlobalRules(java.lang.Boolean enableGlobalRules) {
                this.enableGlobalRules = enableGlobalRules;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getEnableGlobalRules}
             * @param enableGlobalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableGlobalRules(com.aliyun.ros.cdk.core.IResolvable enableGlobalRules) {
                this.enableGlobalRules = enableGlobalRules;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getGlobalRules}
             * @param globalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder globalRules(com.aliyun.ros.cdk.core.IResolvable globalRules) {
                this.globalRules = globalRules;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getGlobalRules}
             * @param globalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder globalRules(java.util.List<? extends java.lang.Object> globalRules) {
                this.globalRules = globalRules;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.core.IResolvable pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.apig.RosHttpApi.AiTokenRateLimitConfigPluginStatusProperty pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getRedisConfig}
             * @param redisConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisConfig(com.aliyun.ros.cdk.core.IResolvable redisConfig) {
                this.redisConfig = redisConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getRedisConfig}
             * @param redisConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redisConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiTokenRateLimitConfigRedisConfigProperty redisConfig) {
                this.redisConfig = redisConfig;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getRules}
             * @param rules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
                this.rules = rules;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigProperty#getRules}
             * @param rules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rules(java.util.List<? extends java.lang.Object> rules) {
                this.rules = rules;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiTokenRateLimitConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiTokenRateLimitConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiTokenRateLimitConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiTokenRateLimitConfigProperty {
            private final java.lang.Object enableGlobalRules;
            private final java.lang.Object globalRules;
            private final java.lang.Object pluginStatus;
            private final java.lang.Object redisConfig;
            private final java.lang.Object rules;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableGlobalRules = software.amazon.jsii.Kernel.get(this, "enableGlobalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.globalRules = software.amazon.jsii.Kernel.get(this, "globalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginStatus = software.amazon.jsii.Kernel.get(this, "pluginStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redisConfig = software.amazon.jsii.Kernel.get(this, "redisConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableGlobalRules = builder.enableGlobalRules;
                this.globalRules = builder.globalRules;
                this.pluginStatus = builder.pluginStatus;
                this.redisConfig = builder.redisConfig;
                this.rules = builder.rules;
            }

            @Override
            public final java.lang.Object getEnableGlobalRules() {
                return this.enableGlobalRules;
            }

            @Override
            public final java.lang.Object getGlobalRules() {
                return this.globalRules;
            }

            @Override
            public final java.lang.Object getPluginStatus() {
                return this.pluginStatus;
            }

            @Override
            public final java.lang.Object getRedisConfig() {
                return this.redisConfig;
            }

            @Override
            public final java.lang.Object getRules() {
                return this.rules;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableGlobalRules() != null) {
                    data.set("enableGlobalRules", om.valueToTree(this.getEnableGlobalRules()));
                }
                if (this.getGlobalRules() != null) {
                    data.set("globalRules", om.valueToTree(this.getGlobalRules()));
                }
                if (this.getPluginStatus() != null) {
                    data.set("pluginStatus", om.valueToTree(this.getPluginStatus()));
                }
                if (this.getRedisConfig() != null) {
                    data.set("redisConfig", om.valueToTree(this.getRedisConfig()));
                }
                if (this.getRules() != null) {
                    data.set("rules", om.valueToTree(this.getRules()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiTokenRateLimitConfigProperty.Jsii$Proxy that = (AiTokenRateLimitConfigProperty.Jsii$Proxy) o;

                if (this.enableGlobalRules != null ? !this.enableGlobalRules.equals(that.enableGlobalRules) : that.enableGlobalRules != null) return false;
                if (this.globalRules != null ? !this.globalRules.equals(that.globalRules) : that.globalRules != null) return false;
                if (this.pluginStatus != null ? !this.pluginStatus.equals(that.pluginStatus) : that.pluginStatus != null) return false;
                if (this.redisConfig != null ? !this.redisConfig.equals(that.redisConfig) : that.redisConfig != null) return false;
                return this.rules != null ? this.rules.equals(that.rules) : that.rules == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableGlobalRules != null ? this.enableGlobalRules.hashCode() : 0;
                result = 31 * result + (this.globalRules != null ? this.globalRules.hashCode() : 0);
                result = 31 * result + (this.pluginStatus != null ? this.pluginStatus.hashCode() : 0);
                result = 31 * result + (this.redisConfig != null ? this.redisConfig.hashCode() : 0);
                result = 31 * result + (this.rules != null ? this.rules.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigRedisConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiTokenRateLimitConfigRedisConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiTokenRateLimitConfigRedisConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiTokenRateLimitConfigRedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiTokenRateLimitConfigRedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiTokenRateLimitConfigRedisConfigProperty> {
            java.lang.Object databaseNumber;
            java.lang.Object host;
            java.lang.Object password;
            java.lang.Object port;
            java.lang.Object timeout;
            java.lang.Object username;

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getDatabaseNumber}
             * @param databaseNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseNumber(java.lang.Number databaseNumber) {
                this.databaseNumber = databaseNumber;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getDatabaseNumber}
             * @param databaseNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseNumber(com.aliyun.ros.cdk.core.IResolvable databaseNumber) {
                this.databaseNumber = databaseNumber;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(java.lang.String username) {
                this.username = username;
                return this;
            }

            /**
             * Sets the value of {@link AiTokenRateLimitConfigRedisConfigProperty#getUsername}
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
             * @return a new instance of {@link AiTokenRateLimitConfigRedisConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiTokenRateLimitConfigRedisConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiTokenRateLimitConfigRedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiTokenRateLimitConfigRedisConfigProperty {
            private final java.lang.Object databaseNumber;
            private final java.lang.Object host;
            private final java.lang.Object password;
            private final java.lang.Object port;
            private final java.lang.Object timeout;
            private final java.lang.Object username;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.databaseNumber = software.amazon.jsii.Kernel.get(this, "databaseNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.databaseNumber = builder.databaseNumber;
                this.host = builder.host;
                this.password = builder.password;
                this.port = builder.port;
                this.timeout = builder.timeout;
                this.username = builder.username;
            }

            @Override
            public final java.lang.Object getDatabaseNumber() {
                return this.databaseNumber;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
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

                if (this.getDatabaseNumber() != null) {
                    data.set("databaseNumber", om.valueToTree(this.getDatabaseNumber()));
                }
                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getUsername() != null) {
                    data.set("username", om.valueToTree(this.getUsername()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiTokenRateLimitConfigRedisConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiTokenRateLimitConfigRedisConfigProperty.Jsii$Proxy that = (AiTokenRateLimitConfigRedisConfigProperty.Jsii$Proxy) o;

                if (this.databaseNumber != null ? !this.databaseNumber.equals(that.databaseNumber) : that.databaseNumber != null) return false;
                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                return this.username != null ? this.username.equals(that.username) : that.username == null;
            }

            @Override
            public final int hashCode() {
                int result = this.databaseNumber != null ? this.databaseNumber.hashCode() : 0;
                result = 31 * result + (this.host != null ? this.host.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiToolSelectionConfigPluginStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(AiToolSelectionConfigPluginStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiToolSelectionConfigPluginStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorLogs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHealthy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiToolSelectionConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiToolSelectionConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiToolSelectionConfigPluginStatusProperty> {
            java.lang.Object errorLogs;
            java.lang.Object pluginId;
            java.lang.Object serviceHealthy;

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(java.lang.String errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(com.aliyun.ros.cdk.core.IResolvable errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(java.lang.Boolean serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigPluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(com.aliyun.ros.cdk.core.IResolvable serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiToolSelectionConfigPluginStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiToolSelectionConfigPluginStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiToolSelectionConfigPluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiToolSelectionConfigPluginStatusProperty {
            private final java.lang.Object errorLogs;
            private final java.lang.Object pluginId;
            private final java.lang.Object serviceHealthy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorLogs = software.amazon.jsii.Kernel.get(this, "errorLogs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHealthy = software.amazon.jsii.Kernel.get(this, "serviceHealthy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorLogs = builder.errorLogs;
                this.pluginId = builder.pluginId;
                this.serviceHealthy = builder.serviceHealthy;
            }

            @Override
            public final java.lang.Object getErrorLogs() {
                return this.errorLogs;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getServiceHealthy() {
                return this.serviceHealthy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorLogs() != null) {
                    data.set("errorLogs", om.valueToTree(this.getErrorLogs()));
                }
                if (this.getPluginId() != null) {
                    data.set("pluginId", om.valueToTree(this.getPluginId()));
                }
                if (this.getServiceHealthy() != null) {
                    data.set("serviceHealthy", om.valueToTree(this.getServiceHealthy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiToolSelectionConfigPluginStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiToolSelectionConfigPluginStatusProperty.Jsii$Proxy that = (AiToolSelectionConfigPluginStatusProperty.Jsii$Proxy) o;

                if (this.errorLogs != null ? !this.errorLogs.equals(that.errorLogs) : that.errorLogs != null) return false;
                if (this.pluginId != null ? !this.pluginId.equals(that.pluginId) : that.pluginId != null) return false;
                return this.serviceHealthy != null ? this.serviceHealthy.equals(that.serviceHealthy) : that.serviceHealthy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorLogs != null ? this.errorLogs.hashCode() : 0;
                result = 31 * result + (this.pluginId != null ? this.pluginId.hashCode() : 0);
                result = 31 * result + (this.serviceHealthy != null ? this.serviceHealthy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AiToolSelectionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AiToolSelectionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AiToolSelectionConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableConditions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginStatus() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryRewriting() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getToolReranking() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AiToolSelectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AiToolSelectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AiToolSelectionConfigProperty> {
            java.lang.Object enableConditions;
            java.lang.Object pluginStatus;
            java.lang.Object queryRewriting;
            java.lang.Object toolReranking;

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getEnableConditions}
             * @param enableConditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableConditions(com.aliyun.ros.cdk.core.IResolvable enableConditions) {
                this.enableConditions = enableConditions;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getEnableConditions}
             * @param enableConditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableConditions(com.aliyun.ros.cdk.apig.RosHttpApi.EnableConditionsProperty enableConditions) {
                this.enableConditions = enableConditions;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.core.IResolvable pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getPluginStatus}
             * @param pluginStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginStatus(com.aliyun.ros.cdk.apig.RosHttpApi.AiToolSelectionConfigPluginStatusProperty pluginStatus) {
                this.pluginStatus = pluginStatus;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getQueryRewriting}
             * @param queryRewriting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryRewriting(com.aliyun.ros.cdk.core.IResolvable queryRewriting) {
                this.queryRewriting = queryRewriting;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getQueryRewriting}
             * @param queryRewriting the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryRewriting(com.aliyun.ros.cdk.apig.RosHttpApi.QueryRewritingProperty queryRewriting) {
                this.queryRewriting = queryRewriting;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getToolReranking}
             * @param toolReranking the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toolReranking(com.aliyun.ros.cdk.core.IResolvable toolReranking) {
                this.toolReranking = toolReranking;
                return this;
            }

            /**
             * Sets the value of {@link AiToolSelectionConfigProperty#getToolReranking}
             * @param toolReranking the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toolReranking(com.aliyun.ros.cdk.apig.RosHttpApi.ToolRerankingProperty toolReranking) {
                this.toolReranking = toolReranking;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AiToolSelectionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AiToolSelectionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AiToolSelectionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AiToolSelectionConfigProperty {
            private final java.lang.Object enableConditions;
            private final java.lang.Object pluginStatus;
            private final java.lang.Object queryRewriting;
            private final java.lang.Object toolReranking;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableConditions = software.amazon.jsii.Kernel.get(this, "enableConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginStatus = software.amazon.jsii.Kernel.get(this, "pluginStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryRewriting = software.amazon.jsii.Kernel.get(this, "queryRewriting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.toolReranking = software.amazon.jsii.Kernel.get(this, "toolReranking", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableConditions = builder.enableConditions;
                this.pluginStatus = builder.pluginStatus;
                this.queryRewriting = builder.queryRewriting;
                this.toolReranking = builder.toolReranking;
            }

            @Override
            public final java.lang.Object getEnableConditions() {
                return this.enableConditions;
            }

            @Override
            public final java.lang.Object getPluginStatus() {
                return this.pluginStatus;
            }

            @Override
            public final java.lang.Object getQueryRewriting() {
                return this.queryRewriting;
            }

            @Override
            public final java.lang.Object getToolReranking() {
                return this.toolReranking;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableConditions() != null) {
                    data.set("enableConditions", om.valueToTree(this.getEnableConditions()));
                }
                if (this.getPluginStatus() != null) {
                    data.set("pluginStatus", om.valueToTree(this.getPluginStatus()));
                }
                if (this.getQueryRewriting() != null) {
                    data.set("queryRewriting", om.valueToTree(this.getQueryRewriting()));
                }
                if (this.getToolReranking() != null) {
                    data.set("toolReranking", om.valueToTree(this.getToolReranking()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AiToolSelectionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AiToolSelectionConfigProperty.Jsii$Proxy that = (AiToolSelectionConfigProperty.Jsii$Proxy) o;

                if (this.enableConditions != null ? !this.enableConditions.equals(that.enableConditions) : that.enableConditions != null) return false;
                if (this.pluginStatus != null ? !this.pluginStatus.equals(that.pluginStatus) : that.pluginStatus != null) return false;
                if (this.queryRewriting != null ? !this.queryRewriting.equals(that.queryRewriting) : that.queryRewriting != null) return false;
                return this.toolReranking != null ? this.toolReranking.equals(that.toolReranking) : that.toolReranking == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableConditions != null ? this.enableConditions.hashCode() : 0;
                result = 31 * result + (this.pluginStatus != null ? this.pluginStatus.hashCode() : 0);
                result = 31 * result + (this.queryRewriting != null ? this.queryRewriting.hashCode() : 0);
                result = 31 * result + (this.toolReranking != null ? this.toolReranking.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.AuthConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthConfigProperty> {
            java.lang.Object authMode;
            java.lang.Object authType;

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthMode}
             * @param authMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authMode(java.lang.String authMode) {
                this.authMode = authMode;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthMode}
             * @param authMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authMode(com.aliyun.ros.cdk.core.IResolvable authMode) {
                this.authMode = authMode;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthType}
             * @param authType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(java.lang.String authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthType}
             * @param authType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthConfigProperty {
            private final java.lang.Object authMode;
            private final java.lang.Object authType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.authMode = software.amazon.jsii.Kernel.get(this, "authMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.authMode = builder.authMode;
                this.authType = builder.authType;
            }

            @Override
            public final java.lang.Object getAuthMode() {
                return this.authMode;
            }

            @Override
            public final java.lang.Object getAuthType() {
                return this.authType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAuthMode() != null) {
                    data.set("authMode", om.valueToTree(this.getAuthMode()));
                }
                if (this.getAuthType() != null) {
                    data.set("authType", om.valueToTree(this.getAuthType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.AuthConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthConfigProperty.Jsii$Proxy that = (AuthConfigProperty.Jsii$Proxy) o;

                if (this.authMode != null ? !this.authMode.equals(that.authMode) : that.authMode != null) return false;
                return this.authType != null ? this.authType.equals(that.authType) : that.authType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.authMode != null ? this.authMode.hashCode() : 0;
                result = 31 * result + (this.authType != null ? this.authType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOperator() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConditionsProperty> {
            java.lang.Object key;
            java.lang.Object operator;
            java.lang.Object type;
            java.lang.Object value;

            /**
             * Sets the value of {@link ConditionsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getOperator}
             * @param operator the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(java.lang.String operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getOperator}
             * @param operator the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder operator(com.aliyun.ros.cdk.core.IResolvable operator) {
                this.operator = operator;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ConditionsProperty#getValue}
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
             * @return a new instance of {@link ConditionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConditionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConditionsProperty {
            private final java.lang.Object key;
            private final java.lang.Object operator;
            private final java.lang.Object type;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.operator = software.amazon.jsii.Kernel.get(this, "operator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.operator = builder.operator;
                this.type = builder.type;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getOperator() {
                return this.operator;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
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
                if (this.getOperator() != null) {
                    data.set("operator", om.valueToTree(this.getOperator()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ConditionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConditionsProperty.Jsii$Proxy that = (ConditionsProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.operator != null ? !this.operator.equals(that.operator) : that.operator != null) return false;
                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.operator != null ? this.operator.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRequestCheckServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(ConsumerRequestCheckServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConsumerRequestCheckServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModalityType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequestCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequestImageCheckService() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConsumerRequestCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConsumerRequestCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConsumerRequestCheckServiceProperty> {
            java.lang.Object matchType;
            java.lang.Object modalityType;
            java.lang.Object name;
            java.lang.Object requestCheckService;
            java.lang.Object requestImageCheckService;

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getModalityType}
             * @param modalityType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modalityType(java.lang.String modalityType) {
                this.modalityType = modalityType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getModalityType}
             * @param modalityType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modalityType(com.aliyun.ros.cdk.core.IResolvable modalityType) {
                this.modalityType = modalityType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getRequestCheckService}
             * @param requestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestCheckService(java.lang.String requestCheckService) {
                this.requestCheckService = requestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getRequestCheckService}
             * @param requestCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestCheckService(com.aliyun.ros.cdk.core.IResolvable requestCheckService) {
                this.requestCheckService = requestCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getRequestImageCheckService}
             * @param requestImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestImageCheckService(java.lang.String requestImageCheckService) {
                this.requestImageCheckService = requestImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRequestCheckServiceProperty#getRequestImageCheckService}
             * @param requestImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestImageCheckService(com.aliyun.ros.cdk.core.IResolvable requestImageCheckService) {
                this.requestImageCheckService = requestImageCheckService;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConsumerRequestCheckServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConsumerRequestCheckServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConsumerRequestCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerRequestCheckServiceProperty {
            private final java.lang.Object matchType;
            private final java.lang.Object modalityType;
            private final java.lang.Object name;
            private final java.lang.Object requestCheckService;
            private final java.lang.Object requestImageCheckService;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modalityType = software.amazon.jsii.Kernel.get(this, "modalityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestCheckService = software.amazon.jsii.Kernel.get(this, "requestCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestImageCheckService = software.amazon.jsii.Kernel.get(this, "requestImageCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.matchType = builder.matchType;
                this.modalityType = builder.modalityType;
                this.name = builder.name;
                this.requestCheckService = builder.requestCheckService;
                this.requestImageCheckService = builder.requestImageCheckService;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getModalityType() {
                return this.modalityType;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getRequestCheckService() {
                return this.requestCheckService;
            }

            @Override
            public final java.lang.Object getRequestImageCheckService() {
                return this.requestImageCheckService;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getModalityType() != null) {
                    data.set("modalityType", om.valueToTree(this.getModalityType()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getRequestCheckService() != null) {
                    data.set("requestCheckService", om.valueToTree(this.getRequestCheckService()));
                }
                if (this.getRequestImageCheckService() != null) {
                    data.set("requestImageCheckService", om.valueToTree(this.getRequestImageCheckService()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRequestCheckServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConsumerRequestCheckServiceProperty.Jsii$Proxy that = (ConsumerRequestCheckServiceProperty.Jsii$Proxy) o;

                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                if (this.modalityType != null ? !this.modalityType.equals(that.modalityType) : that.modalityType != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.requestCheckService != null ? !this.requestCheckService.equals(that.requestCheckService) : that.requestCheckService != null) return false;
                return this.requestImageCheckService != null ? this.requestImageCheckService.equals(that.requestImageCheckService) : that.requestImageCheckService == null;
            }

            @Override
            public final int hashCode() {
                int result = this.matchType != null ? this.matchType.hashCode() : 0;
                result = 31 * result + (this.modalityType != null ? this.modalityType.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.requestCheckService != null ? this.requestCheckService.hashCode() : 0);
                result = 31 * result + (this.requestImageCheckService != null ? this.requestImageCheckService.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ConsumerResponseCheckServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(ConsumerResponseCheckServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConsumerResponseCheckServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModalityType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseCheckService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseImageCheckService() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConsumerResponseCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConsumerResponseCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConsumerResponseCheckServiceProperty> {
            java.lang.Object matchType;
            java.lang.Object modalityType;
            java.lang.Object name;
            java.lang.Object responseCheckService;
            java.lang.Object responseImageCheckService;

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getModalityType}
             * @param modalityType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modalityType(java.lang.String modalityType) {
                this.modalityType = modalityType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getModalityType}
             * @param modalityType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modalityType(com.aliyun.ros.cdk.core.IResolvable modalityType) {
                this.modalityType = modalityType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getResponseCheckService}
             * @param responseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCheckService(java.lang.String responseCheckService) {
                this.responseCheckService = responseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getResponseCheckService}
             * @param responseCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCheckService(com.aliyun.ros.cdk.core.IResolvable responseCheckService) {
                this.responseCheckService = responseCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getResponseImageCheckService}
             * @param responseImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseImageCheckService(java.lang.String responseImageCheckService) {
                this.responseImageCheckService = responseImageCheckService;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerResponseCheckServiceProperty#getResponseImageCheckService}
             * @param responseImageCheckService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseImageCheckService(com.aliyun.ros.cdk.core.IResolvable responseImageCheckService) {
                this.responseImageCheckService = responseImageCheckService;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConsumerResponseCheckServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConsumerResponseCheckServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConsumerResponseCheckServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerResponseCheckServiceProperty {
            private final java.lang.Object matchType;
            private final java.lang.Object modalityType;
            private final java.lang.Object name;
            private final java.lang.Object responseCheckService;
            private final java.lang.Object responseImageCheckService;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modalityType = software.amazon.jsii.Kernel.get(this, "modalityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseCheckService = software.amazon.jsii.Kernel.get(this, "responseCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseImageCheckService = software.amazon.jsii.Kernel.get(this, "responseImageCheckService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.matchType = builder.matchType;
                this.modalityType = builder.modalityType;
                this.name = builder.name;
                this.responseCheckService = builder.responseCheckService;
                this.responseImageCheckService = builder.responseImageCheckService;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getModalityType() {
                return this.modalityType;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getResponseCheckService() {
                return this.responseCheckService;
            }

            @Override
            public final java.lang.Object getResponseImageCheckService() {
                return this.responseImageCheckService;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getModalityType() != null) {
                    data.set("modalityType", om.valueToTree(this.getModalityType()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getResponseCheckService() != null) {
                    data.set("responseCheckService", om.valueToTree(this.getResponseCheckService()));
                }
                if (this.getResponseImageCheckService() != null) {
                    data.set("responseImageCheckService", om.valueToTree(this.getResponseImageCheckService()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ConsumerResponseCheckServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConsumerResponseCheckServiceProperty.Jsii$Proxy that = (ConsumerResponseCheckServiceProperty.Jsii$Proxy) o;

                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                if (this.modalityType != null ? !this.modalityType.equals(that.modalityType) : that.modalityType != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.responseCheckService != null ? !this.responseCheckService.equals(that.responseCheckService) : that.responseCheckService != null) return false;
                return this.responseImageCheckService != null ? this.responseImageCheckService.equals(that.responseImageCheckService) : that.responseImageCheckService == null;
            }

            @Override
            public final int hashCode() {
                int result = this.matchType != null ? this.matchType.hashCode() : 0;
                result = 31 * result + (this.modalityType != null ? this.modalityType.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.responseCheckService != null ? this.responseCheckService.hashCode() : 0);
                result = 31 * result + (this.responseImageCheckService != null ? this.responseImageCheckService.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRiskLevelProperty")
    @software.amazon.jsii.Jsii.Proxy(ConsumerRiskLevelProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConsumerRiskLevelProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConsumerRiskLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConsumerRiskLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConsumerRiskLevelProperty> {
            java.lang.Object level;
            java.lang.Object matchType;
            java.lang.Object name;
            java.lang.Object type;

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRiskLevelProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConsumerRiskLevelProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConsumerRiskLevelProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConsumerRiskLevelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerRiskLevelProperty {
            private final java.lang.Object level;
            private final java.lang.Object matchType;
            private final java.lang.Object name;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.level = builder.level;
                this.matchType = builder.matchType;
                this.name = builder.name;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRiskLevelProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConsumerRiskLevelProperty.Jsii$Proxy that = (ConsumerRiskLevelProperty.Jsii$Proxy) o;

                if (this.level != null ? !this.level.equals(that.level) : that.level != null) return false;
                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.level != null ? this.level.hashCode() : 0;
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(ConsumerRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConsumerRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPattern() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConsumerRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConsumerRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConsumerRulesProperty> {
            java.lang.Object matchType;
            java.lang.Object pattern;

            /**
             * Sets the value of {@link ConsumerRulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRulesProperty#getPattern}
             * @param pattern the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pattern(java.lang.String pattern) {
                this.pattern = pattern;
                return this;
            }

            /**
             * Sets the value of {@link ConsumerRulesProperty#getPattern}
             * @param pattern the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pattern(com.aliyun.ros.cdk.core.IResolvable pattern) {
                this.pattern = pattern;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConsumerRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConsumerRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConsumerRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerRulesProperty {
            private final java.lang.Object matchType;
            private final java.lang.Object pattern;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pattern = software.amazon.jsii.Kernel.get(this, "pattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.matchType = builder.matchType;
                this.pattern = builder.pattern;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getPattern() {
                return this.pattern;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getPattern() != null) {
                    data.set("pattern", om.valueToTree(this.getPattern()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ConsumerRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConsumerRulesProperty.Jsii$Proxy that = (ConsumerRulesProperty.Jsii$Proxy) o;

                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                return this.pattern != null ? this.pattern.equals(that.pattern) : that.pattern == null;
            }

            @Override
            public final int hashCode() {
                int result = this.matchType != null ? this.matchType.hashCode() : 0;
                result = 31 * result + (this.pattern != null ? this.pattern.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ContextSelectionProperty")
    @software.amazon.jsii.Jsii.Proxy(ContextSelectionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContextSelectionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContextSelectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContextSelectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContextSelectionProperty> {
            java.lang.Object type;
            java.lang.Object value;

            /**
             * Sets the value of {@link ContextSelectionProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ContextSelectionProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ContextSelectionProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ContextSelectionProperty#getValue}
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
             * @return a new instance of {@link ContextSelectionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContextSelectionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ContextSelectionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContextSelectionProperty {
            private final java.lang.Object type;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.type = builder.type;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
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

                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ContextSelectionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContextSelectionProperty.Jsii$Proxy that = (ContextSelectionProperty.Jsii$Proxy) o;

                if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.type != null ? this.type.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.CustomDomainInfosProperty")
    @software.amazon.jsii.Jsii.Proxy(CustomDomainInfosProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CustomDomainInfosProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomainId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CustomDomainInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CustomDomainInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CustomDomainInfosProperty> {
            java.lang.Object domainId;
            java.lang.Object name;
            java.lang.Object protocol;

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getDomainId}
             * @param domainId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domainId(java.lang.String domainId) {
                this.domainId = domainId;
                return this;
            }

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getDomainId}
             * @param domainId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domainId(com.aliyun.ros.cdk.core.IResolvable domainId) {
                this.domainId = domainId;
                return this;
            }

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link CustomDomainInfosProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CustomDomainInfosProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CustomDomainInfosProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CustomDomainInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDomainInfosProperty {
            private final java.lang.Object domainId;
            private final java.lang.Object name;
            private final java.lang.Object protocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.domainId = software.amazon.jsii.Kernel.get(this, "domainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.domainId = builder.domainId;
                this.name = builder.name;
                this.protocol = builder.protocol;
            }

            @Override
            public final java.lang.Object getDomainId() {
                return this.domainId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDomainId() != null) {
                    data.set("domainId", om.valueToTree(this.getDomainId()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.CustomDomainInfosProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CustomDomainInfosProperty.Jsii$Proxy that = (CustomDomainInfosProperty.Jsii$Proxy) o;

                if (this.domainId != null ? !this.domainId.equals(that.domainId) : that.domainId != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.protocol != null ? this.protocol.equals(that.protocol) : that.protocol == null;
            }

            @Override
            public final int hashCode() {
                int result = this.domainId != null ? this.domainId.hashCode() : 0;
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.DeployConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(DeployConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeployConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeploy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackendScene() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomDomainIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomDomainInfos() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayInfo() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayType() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyConfigs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRouteBackend() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceConfigs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubDomains() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeployConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeployConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeployConfigsProperty> {
            java.lang.Object autoDeploy;
            java.lang.Object backendScene;
            java.lang.Object customDomainIds;
            java.lang.Object customDomainInfos;
            java.lang.Object environmentId;
            java.lang.Object gatewayId;
            java.lang.Object gatewayInfo;
            java.lang.Object gatewayType;
            java.lang.Object mock;
            java.lang.Object policyConfigs;
            java.lang.Object routeBackend;
            java.lang.Object serviceConfigs;
            java.lang.Object subDomains;

            /**
             * Sets the value of {@link DeployConfigsProperty#getAutoDeploy}
             * @param autoDeploy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoDeploy(java.lang.Boolean autoDeploy) {
                this.autoDeploy = autoDeploy;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getAutoDeploy}
             * @param autoDeploy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoDeploy(com.aliyun.ros.cdk.core.IResolvable autoDeploy) {
                this.autoDeploy = autoDeploy;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getBackendScene}
             * @param backendScene the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendScene(java.lang.String backendScene) {
                this.backendScene = backendScene;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getBackendScene}
             * @param backendScene the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendScene(com.aliyun.ros.cdk.core.IResolvable backendScene) {
                this.backendScene = backendScene;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getCustomDomainIds}
             * @param customDomainIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customDomainIds(com.aliyun.ros.cdk.core.IResolvable customDomainIds) {
                this.customDomainIds = customDomainIds;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getCustomDomainIds}
             * @param customDomainIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customDomainIds(java.util.List<? extends java.lang.Object> customDomainIds) {
                this.customDomainIds = customDomainIds;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getCustomDomainInfos}
             * @param customDomainInfos the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customDomainInfos(com.aliyun.ros.cdk.core.IResolvable customDomainInfos) {
                this.customDomainInfos = customDomainInfos;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getCustomDomainInfos}
             * @param customDomainInfos the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customDomainInfos(java.util.List<? extends java.lang.Object> customDomainInfos) {
                this.customDomainInfos = customDomainInfos;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getEnvironmentId}
             * @param environmentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(java.lang.String environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getEnvironmentId}
             * @param environmentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayId}
             * @param gatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(java.lang.String gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayId}
             * @param gatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayInfo}
             * @param gatewayInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayInfo(com.aliyun.ros.cdk.core.IResolvable gatewayInfo) {
                this.gatewayInfo = gatewayInfo;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayInfo}
             * @param gatewayInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayInfo(com.aliyun.ros.cdk.apig.RosHttpApi.GatewayInfoProperty gatewayInfo) {
                this.gatewayInfo = gatewayInfo;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayType}
             * @param gatewayType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayType(java.lang.String gatewayType) {
                this.gatewayType = gatewayType;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getGatewayType}
             * @param gatewayType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayType(com.aliyun.ros.cdk.core.IResolvable gatewayType) {
                this.gatewayType = gatewayType;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getMock}
             * @param mock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mock(com.aliyun.ros.cdk.core.IResolvable mock) {
                this.mock = mock;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getMock}
             * @param mock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mock(com.aliyun.ros.cdk.apig.RosHttpApi.MockProperty mock) {
                this.mock = mock;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getPolicyConfigs}
             * @param policyConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyConfigs(com.aliyun.ros.cdk.core.IResolvable policyConfigs) {
                this.policyConfigs = policyConfigs;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getPolicyConfigs}
             * @param policyConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policyConfigs(java.util.List<? extends java.lang.Object> policyConfigs) {
                this.policyConfigs = policyConfigs;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getRouteBackend}
             * @param routeBackend the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeBackend(com.aliyun.ros.cdk.core.IResolvable routeBackend) {
                this.routeBackend = routeBackend;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getRouteBackend}
             * @param routeBackend the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routeBackend(com.aliyun.ros.cdk.apig.RosHttpApi.RouteBackendProperty routeBackend) {
                this.routeBackend = routeBackend;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getServiceConfigs}
             * @param serviceConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceConfigs(com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
                this.serviceConfigs = serviceConfigs;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getServiceConfigs}
             * @param serviceConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceConfigs(java.util.List<? extends java.lang.Object> serviceConfigs) {
                this.serviceConfigs = serviceConfigs;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getSubDomains}
             * @param subDomains the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subDomains(com.aliyun.ros.cdk.core.IResolvable subDomains) {
                this.subDomains = subDomains;
                return this;
            }

            /**
             * Sets the value of {@link DeployConfigsProperty#getSubDomains}
             * @param subDomains the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subDomains(java.util.List<? extends java.lang.Object> subDomains) {
                this.subDomains = subDomains;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeployConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeployConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeployConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeployConfigsProperty {
            private final java.lang.Object autoDeploy;
            private final java.lang.Object backendScene;
            private final java.lang.Object customDomainIds;
            private final java.lang.Object customDomainInfos;
            private final java.lang.Object environmentId;
            private final java.lang.Object gatewayId;
            private final java.lang.Object gatewayInfo;
            private final java.lang.Object gatewayType;
            private final java.lang.Object mock;
            private final java.lang.Object policyConfigs;
            private final java.lang.Object routeBackend;
            private final java.lang.Object serviceConfigs;
            private final java.lang.Object subDomains;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.autoDeploy = software.amazon.jsii.Kernel.get(this, "autoDeploy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backendScene = software.amazon.jsii.Kernel.get(this, "backendScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customDomainIds = software.amazon.jsii.Kernel.get(this, "customDomainIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customDomainInfos = software.amazon.jsii.Kernel.get(this, "customDomainInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gatewayInfo = software.amazon.jsii.Kernel.get(this, "gatewayInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gatewayType = software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mock = software.amazon.jsii.Kernel.get(this, "mock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policyConfigs = software.amazon.jsii.Kernel.get(this, "policyConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routeBackend = software.amazon.jsii.Kernel.get(this, "routeBackend", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceConfigs = software.amazon.jsii.Kernel.get(this, "serviceConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subDomains = software.amazon.jsii.Kernel.get(this, "subDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.autoDeploy = builder.autoDeploy;
                this.backendScene = builder.backendScene;
                this.customDomainIds = builder.customDomainIds;
                this.customDomainInfos = builder.customDomainInfos;
                this.environmentId = builder.environmentId;
                this.gatewayId = builder.gatewayId;
                this.gatewayInfo = builder.gatewayInfo;
                this.gatewayType = builder.gatewayType;
                this.mock = builder.mock;
                this.policyConfigs = builder.policyConfigs;
                this.routeBackend = builder.routeBackend;
                this.serviceConfigs = builder.serviceConfigs;
                this.subDomains = builder.subDomains;
            }

            @Override
            public final java.lang.Object getAutoDeploy() {
                return this.autoDeploy;
            }

            @Override
            public final java.lang.Object getBackendScene() {
                return this.backendScene;
            }

            @Override
            public final java.lang.Object getCustomDomainIds() {
                return this.customDomainIds;
            }

            @Override
            public final java.lang.Object getCustomDomainInfos() {
                return this.customDomainInfos;
            }

            @Override
            public final java.lang.Object getEnvironmentId() {
                return this.environmentId;
            }

            @Override
            public final java.lang.Object getGatewayId() {
                return this.gatewayId;
            }

            @Override
            public final java.lang.Object getGatewayInfo() {
                return this.gatewayInfo;
            }

            @Override
            public final java.lang.Object getGatewayType() {
                return this.gatewayType;
            }

            @Override
            public final java.lang.Object getMock() {
                return this.mock;
            }

            @Override
            public final java.lang.Object getPolicyConfigs() {
                return this.policyConfigs;
            }

            @Override
            public final java.lang.Object getRouteBackend() {
                return this.routeBackend;
            }

            @Override
            public final java.lang.Object getServiceConfigs() {
                return this.serviceConfigs;
            }

            @Override
            public final java.lang.Object getSubDomains() {
                return this.subDomains;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAutoDeploy() != null) {
                    data.set("autoDeploy", om.valueToTree(this.getAutoDeploy()));
                }
                if (this.getBackendScene() != null) {
                    data.set("backendScene", om.valueToTree(this.getBackendScene()));
                }
                if (this.getCustomDomainIds() != null) {
                    data.set("customDomainIds", om.valueToTree(this.getCustomDomainIds()));
                }
                if (this.getCustomDomainInfos() != null) {
                    data.set("customDomainInfos", om.valueToTree(this.getCustomDomainInfos()));
                }
                if (this.getEnvironmentId() != null) {
                    data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
                }
                if (this.getGatewayId() != null) {
                    data.set("gatewayId", om.valueToTree(this.getGatewayId()));
                }
                if (this.getGatewayInfo() != null) {
                    data.set("gatewayInfo", om.valueToTree(this.getGatewayInfo()));
                }
                if (this.getGatewayType() != null) {
                    data.set("gatewayType", om.valueToTree(this.getGatewayType()));
                }
                if (this.getMock() != null) {
                    data.set("mock", om.valueToTree(this.getMock()));
                }
                if (this.getPolicyConfigs() != null) {
                    data.set("policyConfigs", om.valueToTree(this.getPolicyConfigs()));
                }
                if (this.getRouteBackend() != null) {
                    data.set("routeBackend", om.valueToTree(this.getRouteBackend()));
                }
                if (this.getServiceConfigs() != null) {
                    data.set("serviceConfigs", om.valueToTree(this.getServiceConfigs()));
                }
                if (this.getSubDomains() != null) {
                    data.set("subDomains", om.valueToTree(this.getSubDomains()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.DeployConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeployConfigsProperty.Jsii$Proxy that = (DeployConfigsProperty.Jsii$Proxy) o;

                if (this.autoDeploy != null ? !this.autoDeploy.equals(that.autoDeploy) : that.autoDeploy != null) return false;
                if (this.backendScene != null ? !this.backendScene.equals(that.backendScene) : that.backendScene != null) return false;
                if (this.customDomainIds != null ? !this.customDomainIds.equals(that.customDomainIds) : that.customDomainIds != null) return false;
                if (this.customDomainInfos != null ? !this.customDomainInfos.equals(that.customDomainInfos) : that.customDomainInfos != null) return false;
                if (this.environmentId != null ? !this.environmentId.equals(that.environmentId) : that.environmentId != null) return false;
                if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
                if (this.gatewayInfo != null ? !this.gatewayInfo.equals(that.gatewayInfo) : that.gatewayInfo != null) return false;
                if (this.gatewayType != null ? !this.gatewayType.equals(that.gatewayType) : that.gatewayType != null) return false;
                if (this.mock != null ? !this.mock.equals(that.mock) : that.mock != null) return false;
                if (this.policyConfigs != null ? !this.policyConfigs.equals(that.policyConfigs) : that.policyConfigs != null) return false;
                if (this.routeBackend != null ? !this.routeBackend.equals(that.routeBackend) : that.routeBackend != null) return false;
                if (this.serviceConfigs != null ? !this.serviceConfigs.equals(that.serviceConfigs) : that.serviceConfigs != null) return false;
                return this.subDomains != null ? this.subDomains.equals(that.subDomains) : that.subDomains == null;
            }

            @Override
            public final int hashCode() {
                int result = this.autoDeploy != null ? this.autoDeploy.hashCode() : 0;
                result = 31 * result + (this.backendScene != null ? this.backendScene.hashCode() : 0);
                result = 31 * result + (this.customDomainIds != null ? this.customDomainIds.hashCode() : 0);
                result = 31 * result + (this.customDomainInfos != null ? this.customDomainInfos.hashCode() : 0);
                result = 31 * result + (this.environmentId != null ? this.environmentId.hashCode() : 0);
                result = 31 * result + (this.gatewayId != null ? this.gatewayId.hashCode() : 0);
                result = 31 * result + (this.gatewayInfo != null ? this.gatewayInfo.hashCode() : 0);
                result = 31 * result + (this.gatewayType != null ? this.gatewayType.hashCode() : 0);
                result = 31 * result + (this.mock != null ? this.mock.hashCode() : 0);
                result = 31 * result + (this.policyConfigs != null ? this.policyConfigs.hashCode() : 0);
                result = 31 * result + (this.routeBackend != null ? this.routeBackend.hashCode() : 0);
                result = 31 * result + (this.serviceConfigs != null ? this.serviceConfigs.hashCode() : 0);
                result = 31 * result + (this.subDomains != null ? this.subDomains.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.EmbeddingConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(EmbeddingConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EmbeddingConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EmbeddingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EmbeddingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EmbeddingConfigProperty> {
            java.lang.Object modelName;
            java.lang.Object serviceId;
            java.lang.Object timeout;
            java.lang.Object type;

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(java.lang.String modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link EmbeddingConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EmbeddingConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EmbeddingConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EmbeddingConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EmbeddingConfigProperty {
            private final java.lang.Object modelName;
            private final java.lang.Object serviceId;
            private final java.lang.Object timeout;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.modelName = builder.modelName;
                this.serviceId = builder.serviceId;
                this.timeout = builder.timeout;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getModelName() {
                return this.modelName;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getModelName() != null) {
                    data.set("modelName", om.valueToTree(this.getModelName()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.EmbeddingConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EmbeddingConfigProperty.Jsii$Proxy that = (EmbeddingConfigProperty.Jsii$Proxy) o;

                if (this.modelName != null ? !this.modelName.equals(that.modelName) : that.modelName != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.modelName != null ? this.modelName.hashCode() : 0;
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.EnableConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(EnableConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EnableConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getToolCountThreshold() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EnableConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EnableConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EnableConditionsProperty> {
            java.lang.Object toolCountThreshold;

            /**
             * Sets the value of {@link EnableConditionsProperty#getToolCountThreshold}
             * @param toolCountThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toolCountThreshold(java.lang.Number toolCountThreshold) {
                this.toolCountThreshold = toolCountThreshold;
                return this;
            }

            /**
             * Sets the value of {@link EnableConditionsProperty#getToolCountThreshold}
             * @param toolCountThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toolCountThreshold(com.aliyun.ros.cdk.core.IResolvable toolCountThreshold) {
                this.toolCountThreshold = toolCountThreshold;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EnableConditionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EnableConditionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EnableConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnableConditionsProperty {
            private final java.lang.Object toolCountThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.toolCountThreshold = software.amazon.jsii.Kernel.get(this, "toolCountThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.toolCountThreshold = builder.toolCountThreshold;
            }

            @Override
            public final java.lang.Object getToolCountThreshold() {
                return this.toolCountThreshold;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getToolCountThreshold() != null) {
                    data.set("toolCountThreshold", om.valueToTree(this.getToolCountThreshold()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.EnableConditionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EnableConditionsProperty.Jsii$Proxy that = (EnableConditionsProperty.Jsii$Proxy) o;

                return this.toolCountThreshold != null ? this.toolCountThreshold.equals(that.toolCountThreshold) : that.toolCountThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.toolCountThreshold != null ? this.toolCountThreshold.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.GatewayInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(GatewayInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GatewayInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcInfo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GatewayInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GatewayInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GatewayInfoProperty> {
            java.lang.Object engineVersion;
            java.lang.Object gatewayId;
            java.lang.Object name;
            java.lang.Object vpcInfo;

            /**
             * Sets the value of {@link GatewayInfoProperty#getEngineVersion}
             * @param engineVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineVersion(java.lang.String engineVersion) {
                this.engineVersion = engineVersion;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getEngineVersion}
             * @param engineVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
                this.engineVersion = engineVersion;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getGatewayId}
             * @param gatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(java.lang.String gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getGatewayId}
             * @param gatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getVpcInfo}
             * @param vpcInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcInfo(com.aliyun.ros.cdk.core.IResolvable vpcInfo) {
                this.vpcInfo = vpcInfo;
                return this;
            }

            /**
             * Sets the value of {@link GatewayInfoProperty#getVpcInfo}
             * @param vpcInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcInfo(com.aliyun.ros.cdk.apig.RosHttpApi.VpcInfoProperty vpcInfo) {
                this.vpcInfo = vpcInfo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GatewayInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GatewayInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GatewayInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GatewayInfoProperty {
            private final java.lang.Object engineVersion;
            private final java.lang.Object gatewayId;
            private final java.lang.Object name;
            private final java.lang.Object vpcInfo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcInfo = software.amazon.jsii.Kernel.get(this, "vpcInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.engineVersion = builder.engineVersion;
                this.gatewayId = builder.gatewayId;
                this.name = builder.name;
                this.vpcInfo = builder.vpcInfo;
            }

            @Override
            public final java.lang.Object getEngineVersion() {
                return this.engineVersion;
            }

            @Override
            public final java.lang.Object getGatewayId() {
                return this.gatewayId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getVpcInfo() {
                return this.vpcInfo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEngineVersion() != null) {
                    data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
                }
                if (this.getGatewayId() != null) {
                    data.set("gatewayId", om.valueToTree(this.getGatewayId()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getVpcInfo() != null) {
                    data.set("vpcInfo", om.valueToTree(this.getVpcInfo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.GatewayInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GatewayInfoProperty.Jsii$Proxy that = (GatewayInfoProperty.Jsii$Proxy) o;

                if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
                if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.vpcInfo != null ? this.vpcInfo.equals(that.vpcInfo) : that.vpcInfo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.engineVersion != null ? this.engineVersion.hashCode() : 0;
                result = 31 * result + (this.gatewayId != null ? this.gatewayId.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.vpcInfo != null ? this.vpcInfo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.GlobalRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(GlobalRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GlobalRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link GlobalRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GlobalRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GlobalRulesProperty> {
            java.lang.Object limitMode;
            java.lang.Object limitType;
            java.lang.Object limitValue;
            java.lang.Object matchKey;
            java.lang.Object matchType;
            java.lang.Object matchValue;

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitMode}
             * @param limitMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitMode(java.lang.String limitMode) {
                this.limitMode = limitMode;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitMode}
             * @param limitMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitMode(com.aliyun.ros.cdk.core.IResolvable limitMode) {
                this.limitMode = limitMode;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitType}
             * @param limitType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitType(java.lang.String limitType) {
                this.limitType = limitType;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitType}
             * @param limitType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitType(com.aliyun.ros.cdk.core.IResolvable limitType) {
                this.limitType = limitType;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitValue}
             * @param limitValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitValue(java.lang.Number limitValue) {
                this.limitValue = limitValue;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getLimitValue}
             * @param limitValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitValue(com.aliyun.ros.cdk.core.IResolvable limitValue) {
                this.limitValue = limitValue;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchKey}
             * @param matchKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchKey(java.lang.String matchKey) {
                this.matchKey = matchKey;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchKey}
             * @param matchKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchKey(com.aliyun.ros.cdk.core.IResolvable matchKey) {
                this.matchKey = matchKey;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchValue}
             * @param matchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchValue(java.lang.String matchValue) {
                this.matchValue = matchValue;
                return this;
            }

            /**
             * Sets the value of {@link GlobalRulesProperty#getMatchValue}
             * @param matchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchValue(com.aliyun.ros.cdk.core.IResolvable matchValue) {
                this.matchValue = matchValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GlobalRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GlobalRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link GlobalRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GlobalRulesProperty {
            private final java.lang.Object limitMode;
            private final java.lang.Object limitType;
            private final java.lang.Object limitValue;
            private final java.lang.Object matchKey;
            private final java.lang.Object matchType;
            private final java.lang.Object matchValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.limitMode = software.amazon.jsii.Kernel.get(this, "limitMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.limitType = software.amazon.jsii.Kernel.get(this, "limitType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.limitValue = software.amazon.jsii.Kernel.get(this, "limitValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchKey = software.amazon.jsii.Kernel.get(this, "matchKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchValue = software.amazon.jsii.Kernel.get(this, "matchValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.limitMode = builder.limitMode;
                this.limitType = builder.limitType;
                this.limitValue = builder.limitValue;
                this.matchKey = builder.matchKey;
                this.matchType = builder.matchType;
                this.matchValue = builder.matchValue;
            }

            @Override
            public final java.lang.Object getLimitMode() {
                return this.limitMode;
            }

            @Override
            public final java.lang.Object getLimitType() {
                return this.limitType;
            }

            @Override
            public final java.lang.Object getLimitValue() {
                return this.limitValue;
            }

            @Override
            public final java.lang.Object getMatchKey() {
                return this.matchKey;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getMatchValue() {
                return this.matchValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLimitMode() != null) {
                    data.set("limitMode", om.valueToTree(this.getLimitMode()));
                }
                if (this.getLimitType() != null) {
                    data.set("limitType", om.valueToTree(this.getLimitType()));
                }
                if (this.getLimitValue() != null) {
                    data.set("limitValue", om.valueToTree(this.getLimitValue()));
                }
                if (this.getMatchKey() != null) {
                    data.set("matchKey", om.valueToTree(this.getMatchKey()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getMatchValue() != null) {
                    data.set("matchValue", om.valueToTree(this.getMatchValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.GlobalRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GlobalRulesProperty.Jsii$Proxy that = (GlobalRulesProperty.Jsii$Proxy) o;

                if (this.limitMode != null ? !this.limitMode.equals(that.limitMode) : that.limitMode != null) return false;
                if (this.limitType != null ? !this.limitType.equals(that.limitType) : that.limitType != null) return false;
                if (this.limitValue != null ? !this.limitValue.equals(that.limitValue) : that.limitValue != null) return false;
                if (this.matchKey != null ? !this.matchKey.equals(that.matchKey) : that.matchKey != null) return false;
                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                return this.matchValue != null ? this.matchValue.equals(that.matchValue) : that.matchValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.limitMode != null ? this.limitMode.hashCode() : 0;
                result = 31 * result + (this.limitType != null ? this.limitType.hashCode() : 0);
                result = 31 * result + (this.limitValue != null ? this.limitValue.hashCode() : 0);
                result = 31 * result + (this.matchKey != null ? this.matchKey.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                result = 31 * result + (this.matchValue != null ? this.matchValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.IngressConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IngressConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IngressConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIngressClass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOverrideIngressIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWatchNamespace() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IngressConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IngressConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IngressConfigProperty> {
            java.lang.Object clusterId;
            java.lang.Object environmentId;
            java.lang.Object ingressClass;
            java.lang.Object overrideIngressIp;
            java.lang.Object sourceId;
            java.lang.Object watchNamespace;

            /**
             * Sets the value of {@link IngressConfigProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(java.lang.String clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getClusterId}
             * @param clusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
                this.clusterId = clusterId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getEnvironmentId}
             * @param environmentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(java.lang.String environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getEnvironmentId}
             * @param environmentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getIngressClass}
             * @param ingressClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ingressClass(java.lang.String ingressClass) {
                this.ingressClass = ingressClass;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getIngressClass}
             * @param ingressClass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ingressClass(com.aliyun.ros.cdk.core.IResolvable ingressClass) {
                this.ingressClass = ingressClass;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getOverrideIngressIp}
             * @param overrideIngressIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder overrideIngressIp(java.lang.Boolean overrideIngressIp) {
                this.overrideIngressIp = overrideIngressIp;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getOverrideIngressIp}
             * @param overrideIngressIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder overrideIngressIp(com.aliyun.ros.cdk.core.IResolvable overrideIngressIp) {
                this.overrideIngressIp = overrideIngressIp;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getSourceId}
             * @param sourceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceId(java.lang.String sourceId) {
                this.sourceId = sourceId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getSourceId}
             * @param sourceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
                this.sourceId = sourceId;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getWatchNamespace}
             * @param watchNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watchNamespace(java.lang.String watchNamespace) {
                this.watchNamespace = watchNamespace;
                return this;
            }

            /**
             * Sets the value of {@link IngressConfigProperty#getWatchNamespace}
             * @param watchNamespace the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watchNamespace(com.aliyun.ros.cdk.core.IResolvable watchNamespace) {
                this.watchNamespace = watchNamespace;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IngressConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IngressConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IngressConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IngressConfigProperty {
            private final java.lang.Object clusterId;
            private final java.lang.Object environmentId;
            private final java.lang.Object ingressClass;
            private final java.lang.Object overrideIngressIp;
            private final java.lang.Object sourceId;
            private final java.lang.Object watchNamespace;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ingressClass = software.amazon.jsii.Kernel.get(this, "ingressClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.overrideIngressIp = software.amazon.jsii.Kernel.get(this, "overrideIngressIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.watchNamespace = software.amazon.jsii.Kernel.get(this, "watchNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.clusterId = builder.clusterId;
                this.environmentId = builder.environmentId;
                this.ingressClass = builder.ingressClass;
                this.overrideIngressIp = builder.overrideIngressIp;
                this.sourceId = builder.sourceId;
                this.watchNamespace = builder.watchNamespace;
            }

            @Override
            public final java.lang.Object getClusterId() {
                return this.clusterId;
            }

            @Override
            public final java.lang.Object getEnvironmentId() {
                return this.environmentId;
            }

            @Override
            public final java.lang.Object getIngressClass() {
                return this.ingressClass;
            }

            @Override
            public final java.lang.Object getOverrideIngressIp() {
                return this.overrideIngressIp;
            }

            @Override
            public final java.lang.Object getSourceId() {
                return this.sourceId;
            }

            @Override
            public final java.lang.Object getWatchNamespace() {
                return this.watchNamespace;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getClusterId() != null) {
                    data.set("clusterId", om.valueToTree(this.getClusterId()));
                }
                if (this.getEnvironmentId() != null) {
                    data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
                }
                if (this.getIngressClass() != null) {
                    data.set("ingressClass", om.valueToTree(this.getIngressClass()));
                }
                if (this.getOverrideIngressIp() != null) {
                    data.set("overrideIngressIp", om.valueToTree(this.getOverrideIngressIp()));
                }
                if (this.getSourceId() != null) {
                    data.set("sourceId", om.valueToTree(this.getSourceId()));
                }
                if (this.getWatchNamespace() != null) {
                    data.set("watchNamespace", om.valueToTree(this.getWatchNamespace()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.IngressConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IngressConfigProperty.Jsii$Proxy that = (IngressConfigProperty.Jsii$Proxy) o;

                if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
                if (this.environmentId != null ? !this.environmentId.equals(that.environmentId) : that.environmentId != null) return false;
                if (this.ingressClass != null ? !this.ingressClass.equals(that.ingressClass) : that.ingressClass != null) return false;
                if (this.overrideIngressIp != null ? !this.overrideIngressIp.equals(that.overrideIngressIp) : that.overrideIngressIp != null) return false;
                if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
                return this.watchNamespace != null ? this.watchNamespace.equals(that.watchNamespace) : that.watchNamespace == null;
            }

            @Override
            public final int hashCode() {
                int result = this.clusterId != null ? this.clusterId.hashCode() : 0;
                result = 31 * result + (this.environmentId != null ? this.environmentId.hashCode() : 0);
                result = 31 * result + (this.ingressClass != null ? this.ingressClass.hashCode() : 0);
                result = 31 * result + (this.overrideIngressIp != null ? this.overrideIngressIp.hashCode() : 0);
                result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
                result = 31 * result + (this.watchNamespace != null ? this.watchNamespace.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.MatchProperty")
    @software.amazon.jsii.Jsii.Proxy(MatchProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MatchProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConditions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MatchProperty> {
            java.lang.Object conditions;
            java.lang.Object defaultValue;

            /**
             * Sets the value of {@link MatchProperty#getConditions}
             * @param conditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder conditions(com.aliyun.ros.cdk.core.IResolvable conditions) {
                this.conditions = conditions;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getConditions}
             * @param conditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder conditions(java.util.List<? extends java.lang.Object> conditions) {
                this.conditions = conditions;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getDefaultValue}
             * @param defaultValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultValue(java.lang.Boolean defaultValue) {
                this.defaultValue = defaultValue;
                return this;
            }

            /**
             * Sets the value of {@link MatchProperty#getDefaultValue}
             * @param defaultValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultValue(com.aliyun.ros.cdk.core.IResolvable defaultValue) {
                this.defaultValue = defaultValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MatchProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MatchProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MatchProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MatchProperty {
            private final java.lang.Object conditions;
            private final java.lang.Object defaultValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.conditions = software.amazon.jsii.Kernel.get(this, "conditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.defaultValue = software.amazon.jsii.Kernel.get(this, "default", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.conditions = builder.conditions;
                this.defaultValue = builder.defaultValue;
            }

            @Override
            public final java.lang.Object getConditions() {
                return this.conditions;
            }

            @Override
            public final java.lang.Object getDefaultValue() {
                return this.defaultValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConditions() != null) {
                    data.set("conditions", om.valueToTree(this.getConditions()));
                }
                if (this.getDefaultValue() != null) {
                    data.set("default", om.valueToTree(this.getDefaultValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.MatchProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MatchProperty.Jsii$Proxy that = (MatchProperty.Jsii$Proxy) o;

                if (this.conditions != null ? !this.conditions.equals(that.conditions) : that.conditions != null) return false;
                return this.defaultValue != null ? this.defaultValue.equals(that.defaultValue) : that.defaultValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.conditions != null ? this.conditions.hashCode() : 0;
                result = 31 * result + (this.defaultValue != null ? this.defaultValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.MockProperty")
    @software.amazon.jsii.Jsii.Proxy(MockProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MockProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseContent() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MockProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MockProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MockProperty> {
            java.lang.Object enable;
            java.lang.Object responseCode;
            java.lang.Object responseContent;

            /**
             * Sets the value of {@link MockProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link MockProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link MockProperty#getResponseCode}
             * @param responseCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCode(java.lang.Number responseCode) {
                this.responseCode = responseCode;
                return this;
            }

            /**
             * Sets the value of {@link MockProperty#getResponseCode}
             * @param responseCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseCode(com.aliyun.ros.cdk.core.IResolvable responseCode) {
                this.responseCode = responseCode;
                return this;
            }

            /**
             * Sets the value of {@link MockProperty#getResponseContent}
             * @param responseContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseContent(java.lang.String responseContent) {
                this.responseContent = responseContent;
                return this;
            }

            /**
             * Sets the value of {@link MockProperty#getResponseContent}
             * @param responseContent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseContent(com.aliyun.ros.cdk.core.IResolvable responseContent) {
                this.responseContent = responseContent;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MockProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MockProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MockProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MockProperty {
            private final java.lang.Object enable;
            private final java.lang.Object responseCode;
            private final java.lang.Object responseContent;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseCode = software.amazon.jsii.Kernel.get(this, "responseCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseContent = software.amazon.jsii.Kernel.get(this, "responseContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = builder.enable;
                this.responseCode = builder.responseCode;
                this.responseContent = builder.responseContent;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getResponseCode() {
                return this.responseCode;
            }

            @Override
            public final java.lang.Object getResponseContent() {
                return this.responseContent;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getResponseCode() != null) {
                    data.set("responseCode", om.valueToTree(this.getResponseCode()));
                }
                if (this.getResponseContent() != null) {
                    data.set("responseContent", om.valueToTree(this.getResponseContent()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.MockProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MockProperty.Jsii$Proxy that = (MockProperty.Jsii$Proxy) o;

                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.responseCode != null ? !this.responseCode.equals(that.responseCode) : that.responseCode != null) return false;
                return this.responseContent != null ? this.responseContent.equals(that.responseContent) : that.responseContent == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable != null ? this.enable.hashCode() : 0;
                result = 31 * result + (this.responseCode != null ? this.responseCode.hashCode() : 0);
                result = 31 * result + (this.responseContent != null ? this.responseContent.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ModelServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(ModelServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ModelServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ModelServiceProperty> {
            java.lang.Object modelName;
            java.lang.Object serviceId;
            java.lang.Object timeoutMillisecond;

            /**
             * Sets the value of {@link ModelServiceProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(java.lang.String modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ModelServiceProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ModelServiceProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ModelServiceProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ModelServiceProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link ModelServiceProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ModelServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ModelServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ModelServiceProperty {
            private final java.lang.Object modelName;
            private final java.lang.Object serviceId;
            private final java.lang.Object timeoutMillisecond;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.modelName = builder.modelName;
                this.serviceId = builder.serviceId;
                this.timeoutMillisecond = builder.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getModelName() {
                return this.modelName;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getModelName() != null) {
                    data.set("modelName", om.valueToTree(this.getModelName()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ModelServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ModelServiceProperty.Jsii$Proxy that = (ModelServiceProperty.Jsii$Proxy) o;

                if (this.modelName != null ? !this.modelName.equals(that.modelName) : that.modelName != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                return this.timeoutMillisecond != null ? this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond == null;
            }

            @Override
            public final int hashCode() {
                int result = this.modelName != null ? this.modelName.hashCode() : 0;
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ObservabilityRouteConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ObservabilityRouteConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ObservabilityRouteConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueueSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRateLimit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ObservabilityRouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ObservabilityRouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ObservabilityRouteConfigProperty> {
            java.lang.Object mode;
            java.lang.Object queueSize;
            java.lang.Object rateLimit;

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(java.lang.String mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getQueueSize}
             * @param queueSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueSize(java.lang.Number queueSize) {
                this.queueSize = queueSize;
                return this;
            }

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getQueueSize}
             * @param queueSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueSize(com.aliyun.ros.cdk.core.IResolvable queueSize) {
                this.queueSize = queueSize;
                return this;
            }

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getRateLimit}
             * @param rateLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateLimit(java.lang.Number rateLimit) {
                this.rateLimit = rateLimit;
                return this;
            }

            /**
             * Sets the value of {@link ObservabilityRouteConfigProperty#getRateLimit}
             * @param rateLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rateLimit(com.aliyun.ros.cdk.core.IResolvable rateLimit) {
                this.rateLimit = rateLimit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ObservabilityRouteConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ObservabilityRouteConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ObservabilityRouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ObservabilityRouteConfigProperty {
            private final java.lang.Object mode;
            private final java.lang.Object queueSize;
            private final java.lang.Object rateLimit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queueSize = software.amazon.jsii.Kernel.get(this, "queueSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rateLimit = software.amazon.jsii.Kernel.get(this, "rateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mode = builder.mode;
                this.queueSize = builder.queueSize;
                this.rateLimit = builder.rateLimit;
            }

            @Override
            public final java.lang.Object getMode() {
                return this.mode;
            }

            @Override
            public final java.lang.Object getQueueSize() {
                return this.queueSize;
            }

            @Override
            public final java.lang.Object getRateLimit() {
                return this.rateLimit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMode() != null) {
                    data.set("mode", om.valueToTree(this.getMode()));
                }
                if (this.getQueueSize() != null) {
                    data.set("queueSize", om.valueToTree(this.getQueueSize()));
                }
                if (this.getRateLimit() != null) {
                    data.set("rateLimit", om.valueToTree(this.getRateLimit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ObservabilityRouteConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ObservabilityRouteConfigProperty.Jsii$Proxy that = (ObservabilityRouteConfigProperty.Jsii$Proxy) o;

                if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
                if (this.queueSize != null ? !this.queueSize.equals(that.queueSize) : that.queueSize != null) return false;
                return this.rateLimit != null ? this.rateLimit.equals(that.rateLimit) : that.rateLimit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mode != null ? this.mode.hashCode() : 0;
                result = 31 * result + (this.queueSize != null ? this.queueSize.hashCode() : 0);
                result = 31 * result + (this.rateLimit != null ? this.rateLimit.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.PathFieldConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(PathFieldConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PathFieldConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFieldPaths() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PathFieldConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PathFieldConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PathFieldConfigsProperty> {
            java.lang.Object fieldPaths;
            java.lang.Object path;

            /**
             * Sets the value of {@link PathFieldConfigsProperty#getFieldPaths}
             * @param fieldPaths the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldPaths(com.aliyun.ros.cdk.core.IResolvable fieldPaths) {
                this.fieldPaths = fieldPaths;
                return this;
            }

            /**
             * Sets the value of {@link PathFieldConfigsProperty#getFieldPaths}
             * @param fieldPaths the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldPaths(java.util.List<? extends java.lang.Object> fieldPaths) {
                this.fieldPaths = fieldPaths;
                return this;
            }

            /**
             * Sets the value of {@link PathFieldConfigsProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link PathFieldConfigsProperty#getPath}
             * @param path the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PathFieldConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PathFieldConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PathFieldConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PathFieldConfigsProperty {
            private final java.lang.Object fieldPaths;
            private final java.lang.Object path;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldPaths = software.amazon.jsii.Kernel.get(this, "fieldPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldPaths = builder.fieldPaths;
                this.path = builder.path;
            }

            @Override
            public final java.lang.Object getFieldPaths() {
                return this.fieldPaths;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFieldPaths() != null) {
                    data.set("fieldPaths", om.valueToTree(this.getFieldPaths()));
                }
                if (this.getPath() != null) {
                    data.set("path", om.valueToTree(this.getPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.PathFieldConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PathFieldConfigsProperty.Jsii$Proxy that = (PathFieldConfigsProperty.Jsii$Proxy) o;

                if (this.fieldPaths != null ? !this.fieldPaths.equals(that.fieldPaths) : that.fieldPaths != null) return false;
                return this.path != null ? this.path.equals(that.path) : that.path == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fieldPaths != null ? this.fieldPaths.hashCode() : 0;
                result = 31 * result + (this.path != null ? this.path.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.PluginStatusProperty")
    @software.amazon.jsii.Jsii.Proxy(PluginStatusProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PluginStatusProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorLogs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHealthy() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PluginStatusProperty> {
            java.lang.Object errorLogs;
            java.lang.Object pluginId;
            java.lang.Object serviceHealthy;

            /**
             * Sets the value of {@link PluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(java.lang.String errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link PluginStatusProperty#getErrorLogs}
             * @param errorLogs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorLogs(com.aliyun.ros.cdk.core.IResolvable errorLogs) {
                this.errorLogs = errorLogs;
                return this;
            }

            /**
             * Sets the value of {@link PluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link PluginStatusProperty#getPluginId}
             * @param pluginId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link PluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(java.lang.Boolean serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Sets the value of {@link PluginStatusProperty#getServiceHealthy}
             * @param serviceHealthy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHealthy(com.aliyun.ros.cdk.core.IResolvable serviceHealthy) {
                this.serviceHealthy = serviceHealthy;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PluginStatusProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PluginStatusProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PluginStatusProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginStatusProperty {
            private final java.lang.Object errorLogs;
            private final java.lang.Object pluginId;
            private final java.lang.Object serviceHealthy;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorLogs = software.amazon.jsii.Kernel.get(this, "errorLogs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHealthy = software.amazon.jsii.Kernel.get(this, "serviceHealthy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorLogs = builder.errorLogs;
                this.pluginId = builder.pluginId;
                this.serviceHealthy = builder.serviceHealthy;
            }

            @Override
            public final java.lang.Object getErrorLogs() {
                return this.errorLogs;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getServiceHealthy() {
                return this.serviceHealthy;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorLogs() != null) {
                    data.set("errorLogs", om.valueToTree(this.getErrorLogs()));
                }
                if (this.getPluginId() != null) {
                    data.set("pluginId", om.valueToTree(this.getPluginId()));
                }
                if (this.getServiceHealthy() != null) {
                    data.set("serviceHealthy", om.valueToTree(this.getServiceHealthy()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.PluginStatusProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PluginStatusProperty.Jsii$Proxy that = (PluginStatusProperty.Jsii$Proxy) o;

                if (this.errorLogs != null ? !this.errorLogs.equals(that.errorLogs) : that.errorLogs != null) return false;
                if (this.pluginId != null ? !this.pluginId.equals(that.pluginId) : that.pluginId != null) return false;
                return this.serviceHealthy != null ? this.serviceHealthy.equals(that.serviceHealthy) : that.serviceHealthy == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorLogs != null ? this.errorLogs.hashCode() : 0;
                result = 31 * result + (this.pluginId != null ? this.pluginId.hashCode() : 0);
                result = 31 * result + (this.serviceHealthy != null ? this.serviceHealthy.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.PolicyConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(PolicyConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PolicyConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiCacheConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiFallbackConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiNetworkSearchConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiSecurityGuardConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiStatisticsConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiTokenRateLimitConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAiToolSelectionConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSemanticRouterConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PolicyConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PolicyConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PolicyConfigsProperty> {
            java.lang.Object aiCacheConfig;
            java.lang.Object aiFallbackConfig;
            java.lang.Object aiNetworkSearchConfig;
            java.lang.Object aiSecurityGuardConfig;
            java.lang.Object aiStatisticsConfig;
            java.lang.Object aiTokenRateLimitConfig;
            java.lang.Object aiToolSelectionConfig;
            java.lang.Object enable;
            java.lang.Object semanticRouterConfig;
            java.lang.Object type;

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiCacheConfig}
             * @param aiCacheConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiCacheConfig(com.aliyun.ros.cdk.core.IResolvable aiCacheConfig) {
                this.aiCacheConfig = aiCacheConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiCacheConfig}
             * @param aiCacheConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiCacheConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiCacheConfigProperty aiCacheConfig) {
                this.aiCacheConfig = aiCacheConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiFallbackConfig}
             * @param aiFallbackConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiFallbackConfig(com.aliyun.ros.cdk.core.IResolvable aiFallbackConfig) {
                this.aiFallbackConfig = aiFallbackConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiFallbackConfig}
             * @param aiFallbackConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiFallbackConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiFallbackConfigProperty aiFallbackConfig) {
                this.aiFallbackConfig = aiFallbackConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiNetworkSearchConfig}
             * @param aiNetworkSearchConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiNetworkSearchConfig(com.aliyun.ros.cdk.core.IResolvable aiNetworkSearchConfig) {
                this.aiNetworkSearchConfig = aiNetworkSearchConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiNetworkSearchConfig}
             * @param aiNetworkSearchConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiNetworkSearchConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiNetworkSearchConfigProperty aiNetworkSearchConfig) {
                this.aiNetworkSearchConfig = aiNetworkSearchConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiSecurityGuardConfig}
             * @param aiSecurityGuardConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiSecurityGuardConfig(com.aliyun.ros.cdk.core.IResolvable aiSecurityGuardConfig) {
                this.aiSecurityGuardConfig = aiSecurityGuardConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiSecurityGuardConfig}
             * @param aiSecurityGuardConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiSecurityGuardConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiSecurityGuardConfigProperty aiSecurityGuardConfig) {
                this.aiSecurityGuardConfig = aiSecurityGuardConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiStatisticsConfig}
             * @param aiStatisticsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiStatisticsConfig(com.aliyun.ros.cdk.core.IResolvable aiStatisticsConfig) {
                this.aiStatisticsConfig = aiStatisticsConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiStatisticsConfig}
             * @param aiStatisticsConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiStatisticsConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiStatisticsConfigProperty aiStatisticsConfig) {
                this.aiStatisticsConfig = aiStatisticsConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiTokenRateLimitConfig}
             * @param aiTokenRateLimitConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiTokenRateLimitConfig(com.aliyun.ros.cdk.core.IResolvable aiTokenRateLimitConfig) {
                this.aiTokenRateLimitConfig = aiTokenRateLimitConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiTokenRateLimitConfig}
             * @param aiTokenRateLimitConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiTokenRateLimitConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiTokenRateLimitConfigProperty aiTokenRateLimitConfig) {
                this.aiTokenRateLimitConfig = aiTokenRateLimitConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiToolSelectionConfig}
             * @param aiToolSelectionConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiToolSelectionConfig(com.aliyun.ros.cdk.core.IResolvable aiToolSelectionConfig) {
                this.aiToolSelectionConfig = aiToolSelectionConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getAiToolSelectionConfig}
             * @param aiToolSelectionConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aiToolSelectionConfig(com.aliyun.ros.cdk.apig.RosHttpApi.AiToolSelectionConfigProperty aiToolSelectionConfig) {
                this.aiToolSelectionConfig = aiToolSelectionConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getSemanticRouterConfig}
             * @param semanticRouterConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder semanticRouterConfig(com.aliyun.ros.cdk.core.IResolvable semanticRouterConfig) {
                this.semanticRouterConfig = semanticRouterConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getSemanticRouterConfig}
             * @param semanticRouterConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder semanticRouterConfig(com.aliyun.ros.cdk.apig.RosHttpApi.SemanticRouterConfigProperty semanticRouterConfig) {
                this.semanticRouterConfig = semanticRouterConfig;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PolicyConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PolicyConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PolicyConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PolicyConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyConfigsProperty {
            private final java.lang.Object aiCacheConfig;
            private final java.lang.Object aiFallbackConfig;
            private final java.lang.Object aiNetworkSearchConfig;
            private final java.lang.Object aiSecurityGuardConfig;
            private final java.lang.Object aiStatisticsConfig;
            private final java.lang.Object aiTokenRateLimitConfig;
            private final java.lang.Object aiToolSelectionConfig;
            private final java.lang.Object enable;
            private final java.lang.Object semanticRouterConfig;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.aiCacheConfig = software.amazon.jsii.Kernel.get(this, "aiCacheConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiFallbackConfig = software.amazon.jsii.Kernel.get(this, "aiFallbackConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiNetworkSearchConfig = software.amazon.jsii.Kernel.get(this, "aiNetworkSearchConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiSecurityGuardConfig = software.amazon.jsii.Kernel.get(this, "aiSecurityGuardConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiStatisticsConfig = software.amazon.jsii.Kernel.get(this, "aiStatisticsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiTokenRateLimitConfig = software.amazon.jsii.Kernel.get(this, "aiTokenRateLimitConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aiToolSelectionConfig = software.amazon.jsii.Kernel.get(this, "aiToolSelectionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.semanticRouterConfig = software.amazon.jsii.Kernel.get(this, "semanticRouterConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.aiCacheConfig = builder.aiCacheConfig;
                this.aiFallbackConfig = builder.aiFallbackConfig;
                this.aiNetworkSearchConfig = builder.aiNetworkSearchConfig;
                this.aiSecurityGuardConfig = builder.aiSecurityGuardConfig;
                this.aiStatisticsConfig = builder.aiStatisticsConfig;
                this.aiTokenRateLimitConfig = builder.aiTokenRateLimitConfig;
                this.aiToolSelectionConfig = builder.aiToolSelectionConfig;
                this.enable = builder.enable;
                this.semanticRouterConfig = builder.semanticRouterConfig;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getAiCacheConfig() {
                return this.aiCacheConfig;
            }

            @Override
            public final java.lang.Object getAiFallbackConfig() {
                return this.aiFallbackConfig;
            }

            @Override
            public final java.lang.Object getAiNetworkSearchConfig() {
                return this.aiNetworkSearchConfig;
            }

            @Override
            public final java.lang.Object getAiSecurityGuardConfig() {
                return this.aiSecurityGuardConfig;
            }

            @Override
            public final java.lang.Object getAiStatisticsConfig() {
                return this.aiStatisticsConfig;
            }

            @Override
            public final java.lang.Object getAiTokenRateLimitConfig() {
                return this.aiTokenRateLimitConfig;
            }

            @Override
            public final java.lang.Object getAiToolSelectionConfig() {
                return this.aiToolSelectionConfig;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getSemanticRouterConfig() {
                return this.semanticRouterConfig;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAiCacheConfig() != null) {
                    data.set("aiCacheConfig", om.valueToTree(this.getAiCacheConfig()));
                }
                if (this.getAiFallbackConfig() != null) {
                    data.set("aiFallbackConfig", om.valueToTree(this.getAiFallbackConfig()));
                }
                if (this.getAiNetworkSearchConfig() != null) {
                    data.set("aiNetworkSearchConfig", om.valueToTree(this.getAiNetworkSearchConfig()));
                }
                if (this.getAiSecurityGuardConfig() != null) {
                    data.set("aiSecurityGuardConfig", om.valueToTree(this.getAiSecurityGuardConfig()));
                }
                if (this.getAiStatisticsConfig() != null) {
                    data.set("aiStatisticsConfig", om.valueToTree(this.getAiStatisticsConfig()));
                }
                if (this.getAiTokenRateLimitConfig() != null) {
                    data.set("aiTokenRateLimitConfig", om.valueToTree(this.getAiTokenRateLimitConfig()));
                }
                if (this.getAiToolSelectionConfig() != null) {
                    data.set("aiToolSelectionConfig", om.valueToTree(this.getAiToolSelectionConfig()));
                }
                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getSemanticRouterConfig() != null) {
                    data.set("semanticRouterConfig", om.valueToTree(this.getSemanticRouterConfig()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.PolicyConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PolicyConfigsProperty.Jsii$Proxy that = (PolicyConfigsProperty.Jsii$Proxy) o;

                if (this.aiCacheConfig != null ? !this.aiCacheConfig.equals(that.aiCacheConfig) : that.aiCacheConfig != null) return false;
                if (this.aiFallbackConfig != null ? !this.aiFallbackConfig.equals(that.aiFallbackConfig) : that.aiFallbackConfig != null) return false;
                if (this.aiNetworkSearchConfig != null ? !this.aiNetworkSearchConfig.equals(that.aiNetworkSearchConfig) : that.aiNetworkSearchConfig != null) return false;
                if (this.aiSecurityGuardConfig != null ? !this.aiSecurityGuardConfig.equals(that.aiSecurityGuardConfig) : that.aiSecurityGuardConfig != null) return false;
                if (this.aiStatisticsConfig != null ? !this.aiStatisticsConfig.equals(that.aiStatisticsConfig) : that.aiStatisticsConfig != null) return false;
                if (this.aiTokenRateLimitConfig != null ? !this.aiTokenRateLimitConfig.equals(that.aiTokenRateLimitConfig) : that.aiTokenRateLimitConfig != null) return false;
                if (this.aiToolSelectionConfig != null ? !this.aiToolSelectionConfig.equals(that.aiToolSelectionConfig) : that.aiToolSelectionConfig != null) return false;
                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.semanticRouterConfig != null ? !this.semanticRouterConfig.equals(that.semanticRouterConfig) : that.semanticRouterConfig != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.aiCacheConfig != null ? this.aiCacheConfig.hashCode() : 0;
                result = 31 * result + (this.aiFallbackConfig != null ? this.aiFallbackConfig.hashCode() : 0);
                result = 31 * result + (this.aiNetworkSearchConfig != null ? this.aiNetworkSearchConfig.hashCode() : 0);
                result = 31 * result + (this.aiSecurityGuardConfig != null ? this.aiSecurityGuardConfig.hashCode() : 0);
                result = 31 * result + (this.aiStatisticsConfig != null ? this.aiStatisticsConfig.hashCode() : 0);
                result = 31 * result + (this.aiTokenRateLimitConfig != null ? this.aiTokenRateLimitConfig.hashCode() : 0);
                result = 31 * result + (this.aiToolSelectionConfig != null ? this.aiToolSelectionConfig.hashCode() : 0);
                result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
                result = 31 * result + (this.semanticRouterConfig != null ? this.semanticRouterConfig.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.PromptConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(PromptConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PromptConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomPrompt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PromptConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PromptConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PromptConfigProperty> {
            java.lang.Object customPrompt;
            java.lang.Object type;

            /**
             * Sets the value of {@link PromptConfigProperty#getCustomPrompt}
             * @param customPrompt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customPrompt(java.lang.String customPrompt) {
                this.customPrompt = customPrompt;
                return this;
            }

            /**
             * Sets the value of {@link PromptConfigProperty#getCustomPrompt}
             * @param customPrompt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customPrompt(com.aliyun.ros.cdk.core.IResolvable customPrompt) {
                this.customPrompt = customPrompt;
                return this;
            }

            /**
             * Sets the value of {@link PromptConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PromptConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PromptConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PromptConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PromptConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PromptConfigProperty {
            private final java.lang.Object customPrompt;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customPrompt = software.amazon.jsii.Kernel.get(this, "customPrompt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customPrompt = builder.customPrompt;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getCustomPrompt() {
                return this.customPrompt;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustomPrompt() != null) {
                    data.set("customPrompt", om.valueToTree(this.getCustomPrompt()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.PromptConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PromptConfigProperty.Jsii$Proxy that = (PromptConfigProperty.Jsii$Proxy) o;

                if (this.customPrompt != null ? !this.customPrompt.equals(that.customPrompt) : that.customPrompt != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.customPrompt != null ? this.customPrompt.hashCode() : 0;
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.QueryRewritingProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryRewritingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryRewritingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContextSelection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFallbackStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxOutputTokens() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPromptConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTriggerConditions() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryRewritingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryRewritingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryRewritingProperty> {
            java.lang.Object contextSelection;
            java.lang.Object enabled;
            java.lang.Object fallbackStrategy;
            java.lang.Object maxOutputTokens;
            java.lang.Object modelService;
            java.lang.Object promptConfig;
            java.lang.Object triggerConditions;

            /**
             * Sets the value of {@link QueryRewritingProperty#getContextSelection}
             * @param contextSelection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextSelection(com.aliyun.ros.cdk.core.IResolvable contextSelection) {
                this.contextSelection = contextSelection;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getContextSelection}
             * @param contextSelection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contextSelection(com.aliyun.ros.cdk.apig.RosHttpApi.ContextSelectionProperty contextSelection) {
                this.contextSelection = contextSelection;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getEnabled}
             * @param enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getEnabled}
             * @param enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getFallbackStrategy}
             * @param fallbackStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fallbackStrategy(java.lang.String fallbackStrategy) {
                this.fallbackStrategy = fallbackStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getFallbackStrategy}
             * @param fallbackStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fallbackStrategy(com.aliyun.ros.cdk.core.IResolvable fallbackStrategy) {
                this.fallbackStrategy = fallbackStrategy;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getMaxOutputTokens}
             * @param maxOutputTokens the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxOutputTokens(java.lang.Number maxOutputTokens) {
                this.maxOutputTokens = maxOutputTokens;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getMaxOutputTokens}
             * @param maxOutputTokens the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxOutputTokens(com.aliyun.ros.cdk.core.IResolvable maxOutputTokens) {
                this.maxOutputTokens = maxOutputTokens;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getModelService}
             * @param modelService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelService(com.aliyun.ros.cdk.core.IResolvable modelService) {
                this.modelService = modelService;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getModelService}
             * @param modelService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelService(com.aliyun.ros.cdk.apig.RosHttpApi.ModelServiceProperty modelService) {
                this.modelService = modelService;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getPromptConfig}
             * @param promptConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder promptConfig(com.aliyun.ros.cdk.core.IResolvable promptConfig) {
                this.promptConfig = promptConfig;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getPromptConfig}
             * @param promptConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder promptConfig(com.aliyun.ros.cdk.apig.RosHttpApi.PromptConfigProperty promptConfig) {
                this.promptConfig = promptConfig;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getTriggerConditions}
             * @param triggerConditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder triggerConditions(com.aliyun.ros.cdk.core.IResolvable triggerConditions) {
                this.triggerConditions = triggerConditions;
                return this;
            }

            /**
             * Sets the value of {@link QueryRewritingProperty#getTriggerConditions}
             * @param triggerConditions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder triggerConditions(com.aliyun.ros.cdk.apig.RosHttpApi.TriggerConditionsProperty triggerConditions) {
                this.triggerConditions = triggerConditions;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryRewritingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryRewritingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryRewritingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryRewritingProperty {
            private final java.lang.Object contextSelection;
            private final java.lang.Object enabled;
            private final java.lang.Object fallbackStrategy;
            private final java.lang.Object maxOutputTokens;
            private final java.lang.Object modelService;
            private final java.lang.Object promptConfig;
            private final java.lang.Object triggerConditions;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contextSelection = software.amazon.jsii.Kernel.get(this, "contextSelection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fallbackStrategy = software.amazon.jsii.Kernel.get(this, "fallbackStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxOutputTokens = software.amazon.jsii.Kernel.get(this, "maxOutputTokens", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modelService = software.amazon.jsii.Kernel.get(this, "modelService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.promptConfig = software.amazon.jsii.Kernel.get(this, "promptConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.triggerConditions = software.amazon.jsii.Kernel.get(this, "triggerConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contextSelection = builder.contextSelection;
                this.enabled = builder.enabled;
                this.fallbackStrategy = builder.fallbackStrategy;
                this.maxOutputTokens = builder.maxOutputTokens;
                this.modelService = builder.modelService;
                this.promptConfig = builder.promptConfig;
                this.triggerConditions = builder.triggerConditions;
            }

            @Override
            public final java.lang.Object getContextSelection() {
                return this.contextSelection;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getFallbackStrategy() {
                return this.fallbackStrategy;
            }

            @Override
            public final java.lang.Object getMaxOutputTokens() {
                return this.maxOutputTokens;
            }

            @Override
            public final java.lang.Object getModelService() {
                return this.modelService;
            }

            @Override
            public final java.lang.Object getPromptConfig() {
                return this.promptConfig;
            }

            @Override
            public final java.lang.Object getTriggerConditions() {
                return this.triggerConditions;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContextSelection() != null) {
                    data.set("contextSelection", om.valueToTree(this.getContextSelection()));
                }
                if (this.getEnabled() != null) {
                    data.set("enabled", om.valueToTree(this.getEnabled()));
                }
                if (this.getFallbackStrategy() != null) {
                    data.set("fallbackStrategy", om.valueToTree(this.getFallbackStrategy()));
                }
                if (this.getMaxOutputTokens() != null) {
                    data.set("maxOutputTokens", om.valueToTree(this.getMaxOutputTokens()));
                }
                if (this.getModelService() != null) {
                    data.set("modelService", om.valueToTree(this.getModelService()));
                }
                if (this.getPromptConfig() != null) {
                    data.set("promptConfig", om.valueToTree(this.getPromptConfig()));
                }
                if (this.getTriggerConditions() != null) {
                    data.set("triggerConditions", om.valueToTree(this.getTriggerConditions()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.QueryRewritingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryRewritingProperty.Jsii$Proxy that = (QueryRewritingProperty.Jsii$Proxy) o;

                if (this.contextSelection != null ? !this.contextSelection.equals(that.contextSelection) : that.contextSelection != null) return false;
                if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
                if (this.fallbackStrategy != null ? !this.fallbackStrategy.equals(that.fallbackStrategy) : that.fallbackStrategy != null) return false;
                if (this.maxOutputTokens != null ? !this.maxOutputTokens.equals(that.maxOutputTokens) : that.maxOutputTokens != null) return false;
                if (this.modelService != null ? !this.modelService.equals(that.modelService) : that.modelService != null) return false;
                if (this.promptConfig != null ? !this.promptConfig.equals(that.promptConfig) : that.promptConfig != null) return false;
                return this.triggerConditions != null ? this.triggerConditions.equals(that.triggerConditions) : that.triggerConditions == null;
            }

            @Override
            public final int hashCode() {
                int result = this.contextSelection != null ? this.contextSelection.hashCode() : 0;
                result = 31 * result + (this.enabled != null ? this.enabled.hashCode() : 0);
                result = 31 * result + (this.fallbackStrategy != null ? this.fallbackStrategy.hashCode() : 0);
                result = 31 * result + (this.maxOutputTokens != null ? this.maxOutputTokens.hashCode() : 0);
                result = 31 * result + (this.modelService != null ? this.modelService.hashCode() : 0);
                result = 31 * result + (this.promptConfig != null ? this.promptConfig.hashCode() : 0);
                result = 31 * result + (this.triggerConditions != null ? this.triggerConditions.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.RedisConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RedisConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedisConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedisConfigProperty> {
            java.lang.Object databaseNumber;
            java.lang.Object host;
            java.lang.Object password;
            java.lang.Object port;
            java.lang.Object timeout;
            java.lang.Object username;

            /**
             * Sets the value of {@link RedisConfigProperty#getDatabaseNumber}
             * @param databaseNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseNumber(java.lang.Number databaseNumber) {
                this.databaseNumber = databaseNumber;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getDatabaseNumber}
             * @param databaseNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseNumber(com.aliyun.ros.cdk.core.IResolvable databaseNumber) {
                this.databaseNumber = databaseNumber;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(java.lang.String host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getHost}
             * @param host the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
                this.host = host;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(java.lang.String username) {
                this.username = username;
                return this;
            }

            /**
             * Sets the value of {@link RedisConfigProperty#getUsername}
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
             * @return a new instance of {@link RedisConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedisConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedisConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedisConfigProperty {
            private final java.lang.Object databaseNumber;
            private final java.lang.Object host;
            private final java.lang.Object password;
            private final java.lang.Object port;
            private final java.lang.Object timeout;
            private final java.lang.Object username;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.databaseNumber = software.amazon.jsii.Kernel.get(this, "databaseNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.databaseNumber = builder.databaseNumber;
                this.host = builder.host;
                this.password = builder.password;
                this.port = builder.port;
                this.timeout = builder.timeout;
                this.username = builder.username;
            }

            @Override
            public final java.lang.Object getDatabaseNumber() {
                return this.databaseNumber;
            }

            @Override
            public final java.lang.Object getHost() {
                return this.host;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
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

                if (this.getDatabaseNumber() != null) {
                    data.set("databaseNumber", om.valueToTree(this.getDatabaseNumber()));
                }
                if (this.getHost() != null) {
                    data.set("host", om.valueToTree(this.getHost()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getUsername() != null) {
                    data.set("username", om.valueToTree(this.getUsername()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.RedisConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedisConfigProperty.Jsii$Proxy that = (RedisConfigProperty.Jsii$Proxy) o;

                if (this.databaseNumber != null ? !this.databaseNumber.equals(that.databaseNumber) : that.databaseNumber != null) return false;
                if (this.host != null ? !this.host.equals(that.host) : that.host != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                return this.username != null ? this.username.equals(that.username) : that.username == null;
            }

            @Override
            public final int hashCode() {
                int result = this.databaseNumber != null ? this.databaseNumber.hashCode() : 0;
                result = 31 * result + (this.host != null ? this.host.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.RiskConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RiskConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RiskConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsumerRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RiskConfigProperty> {
            java.lang.Object consumerRules;
            java.lang.Object level;
            java.lang.Object type;

            /**
             * Sets the value of {@link RiskConfigProperty#getConsumerRules}
             * @param consumerRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRules(com.aliyun.ros.cdk.core.IResolvable consumerRules) {
                this.consumerRules = consumerRules;
                return this;
            }

            /**
             * Sets the value of {@link RiskConfigProperty#getConsumerRules}
             * @param consumerRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consumerRules(com.aliyun.ros.cdk.apig.RosHttpApi.ConsumerRulesProperty consumerRules) {
                this.consumerRules = consumerRules;
                return this;
            }

            /**
             * Sets the value of {@link RiskConfigProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(java.lang.String level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link RiskConfigProperty#getLevel}
             * @param level the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder level(com.aliyun.ros.cdk.core.IResolvable level) {
                this.level = level;
                return this;
            }

            /**
             * Sets the value of {@link RiskConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link RiskConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RiskConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RiskConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RiskConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RiskConfigProperty {
            private final java.lang.Object consumerRules;
            private final java.lang.Object level;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.consumerRules = software.amazon.jsii.Kernel.get(this, "consumerRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.level = software.amazon.jsii.Kernel.get(this, "level", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.consumerRules = builder.consumerRules;
                this.level = builder.level;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getConsumerRules() {
                return this.consumerRules;
            }

            @Override
            public final java.lang.Object getLevel() {
                return this.level;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConsumerRules() != null) {
                    data.set("consumerRules", om.valueToTree(this.getConsumerRules()));
                }
                if (this.getLevel() != null) {
                    data.set("level", om.valueToTree(this.getLevel()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.RiskConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RiskConfigProperty.Jsii$Proxy that = (RiskConfigProperty.Jsii$Proxy) o;

                if (this.consumerRules != null ? !this.consumerRules.equals(that.consumerRules) : that.consumerRules != null) return false;
                if (this.level != null ? !this.level.equals(that.level) : that.level != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.consumerRules != null ? this.consumerRules.hashCode() : 0;
                result = 31 * result + (this.level != null ? this.level.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.RouteBackendProperty")
    @software.amazon.jsii.Jsii.Proxy(RouteBackendProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RouteBackendProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScene() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServices() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RouteBackendProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RouteBackendProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RouteBackendProperty> {
            java.lang.Object scene;
            java.lang.Object services;

            /**
             * Sets the value of {@link RouteBackendProperty#getScene}
             * @param scene the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scene(java.lang.String scene) {
                this.scene = scene;
                return this;
            }

            /**
             * Sets the value of {@link RouteBackendProperty#getScene}
             * @param scene the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scene(com.aliyun.ros.cdk.core.IResolvable scene) {
                this.scene = scene;
                return this;
            }

            /**
             * Sets the value of {@link RouteBackendProperty#getServices}
             * @param services the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder services(com.aliyun.ros.cdk.core.IResolvable services) {
                this.services = services;
                return this;
            }

            /**
             * Sets the value of {@link RouteBackendProperty#getServices}
             * @param services the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder services(java.util.List<? extends java.lang.Object> services) {
                this.services = services;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RouteBackendProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RouteBackendProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RouteBackendProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteBackendProperty {
            private final java.lang.Object scene;
            private final java.lang.Object services;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.scene = software.amazon.jsii.Kernel.get(this, "scene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.services = software.amazon.jsii.Kernel.get(this, "services", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.scene = builder.scene;
                this.services = builder.services;
            }

            @Override
            public final java.lang.Object getScene() {
                return this.scene;
            }

            @Override
            public final java.lang.Object getServices() {
                return this.services;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getScene() != null) {
                    data.set("scene", om.valueToTree(this.getScene()));
                }
                if (this.getServices() != null) {
                    data.set("services", om.valueToTree(this.getServices()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.RouteBackendProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RouteBackendProperty.Jsii$Proxy that = (RouteBackendProperty.Jsii$Proxy) o;

                if (this.scene != null ? !this.scene.equals(that.scene) : that.scene != null) return false;
                return this.services != null ? this.services.equals(that.services) : that.services == null;
            }

            @Override
            public final int hashCode() {
                int result = this.scene != null ? this.scene.hashCode() : 0;
                result = 31 * result + (this.services != null ? this.services.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.RulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLimitValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RulesProperty> {
            java.lang.Object limitMode;
            java.lang.Object limitType;
            java.lang.Object limitValue;
            java.lang.Object matchKey;
            java.lang.Object matchType;
            java.lang.Object matchValue;

            /**
             * Sets the value of {@link RulesProperty#getLimitMode}
             * @param limitMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitMode(java.lang.String limitMode) {
                this.limitMode = limitMode;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getLimitMode}
             * @param limitMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitMode(com.aliyun.ros.cdk.core.IResolvable limitMode) {
                this.limitMode = limitMode;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getLimitType}
             * @param limitType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitType(java.lang.String limitType) {
                this.limitType = limitType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getLimitType}
             * @param limitType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitType(com.aliyun.ros.cdk.core.IResolvable limitType) {
                this.limitType = limitType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getLimitValue}
             * @param limitValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitValue(java.lang.Number limitValue) {
                this.limitValue = limitValue;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getLimitValue}
             * @param limitValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder limitValue(com.aliyun.ros.cdk.core.IResolvable limitValue) {
                this.limitValue = limitValue;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchKey}
             * @param matchKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchKey(java.lang.String matchKey) {
                this.matchKey = matchKey;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchKey}
             * @param matchKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchKey(com.aliyun.ros.cdk.core.IResolvable matchKey) {
                this.matchKey = matchKey;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(java.lang.String matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchType}
             * @param matchType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchType(com.aliyun.ros.cdk.core.IResolvable matchType) {
                this.matchType = matchType;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchValue}
             * @param matchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchValue(java.lang.String matchValue) {
                this.matchValue = matchValue;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getMatchValue}
             * @param matchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchValue(com.aliyun.ros.cdk.core.IResolvable matchValue) {
                this.matchValue = matchValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RulesProperty {
            private final java.lang.Object limitMode;
            private final java.lang.Object limitType;
            private final java.lang.Object limitValue;
            private final java.lang.Object matchKey;
            private final java.lang.Object matchType;
            private final java.lang.Object matchValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.limitMode = software.amazon.jsii.Kernel.get(this, "limitMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.limitType = software.amazon.jsii.Kernel.get(this, "limitType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.limitValue = software.amazon.jsii.Kernel.get(this, "limitValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchKey = software.amazon.jsii.Kernel.get(this, "matchKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchType = software.amazon.jsii.Kernel.get(this, "matchType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchValue = software.amazon.jsii.Kernel.get(this, "matchValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.limitMode = builder.limitMode;
                this.limitType = builder.limitType;
                this.limitValue = builder.limitValue;
                this.matchKey = builder.matchKey;
                this.matchType = builder.matchType;
                this.matchValue = builder.matchValue;
            }

            @Override
            public final java.lang.Object getLimitMode() {
                return this.limitMode;
            }

            @Override
            public final java.lang.Object getLimitType() {
                return this.limitType;
            }

            @Override
            public final java.lang.Object getLimitValue() {
                return this.limitValue;
            }

            @Override
            public final java.lang.Object getMatchKey() {
                return this.matchKey;
            }

            @Override
            public final java.lang.Object getMatchType() {
                return this.matchType;
            }

            @Override
            public final java.lang.Object getMatchValue() {
                return this.matchValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLimitMode() != null) {
                    data.set("limitMode", om.valueToTree(this.getLimitMode()));
                }
                if (this.getLimitType() != null) {
                    data.set("limitType", om.valueToTree(this.getLimitType()));
                }
                if (this.getLimitValue() != null) {
                    data.set("limitValue", om.valueToTree(this.getLimitValue()));
                }
                if (this.getMatchKey() != null) {
                    data.set("matchKey", om.valueToTree(this.getMatchKey()));
                }
                if (this.getMatchType() != null) {
                    data.set("matchType", om.valueToTree(this.getMatchType()));
                }
                if (this.getMatchValue() != null) {
                    data.set("matchValue", om.valueToTree(this.getMatchValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.RulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RulesProperty.Jsii$Proxy that = (RulesProperty.Jsii$Proxy) o;

                if (this.limitMode != null ? !this.limitMode.equals(that.limitMode) : that.limitMode != null) return false;
                if (this.limitType != null ? !this.limitType.equals(that.limitType) : that.limitType != null) return false;
                if (this.limitValue != null ? !this.limitValue.equals(that.limitValue) : that.limitValue != null) return false;
                if (this.matchKey != null ? !this.matchKey.equals(that.matchKey) : that.matchKey != null) return false;
                if (this.matchType != null ? !this.matchType.equals(that.matchType) : that.matchType != null) return false;
                return this.matchValue != null ? this.matchValue.equals(that.matchValue) : that.matchValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.limitMode != null ? this.limitMode.hashCode() : 0;
                result = 31 * result + (this.limitType != null ? this.limitType.hashCode() : 0);
                result = 31 * result + (this.limitValue != null ? this.limitValue.hashCode() : 0);
                result = 31 * result + (this.matchKey != null ? this.matchKey.hashCode() : 0);
                result = 31 * result + (this.matchType != null ? this.matchType.hashCode() : 0);
                result = 31 * result + (this.matchValue != null ? this.matchValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.SearchEngineConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SearchEngineConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SearchEngineConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndustry() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOptionArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStart() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeRange() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SearchEngineConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SearchEngineConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SearchEngineConfigProperty> {
            java.lang.Object apiKey;
            java.lang.Object contentMode;
            java.lang.Object count;
            java.lang.Object endpoint;
            java.lang.Object industry;
            java.lang.Object optionArgs;
            java.lang.Object start;
            java.lang.Object timeoutMillisecond;
            java.lang.Object timeRange;
            java.lang.Object type;

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(java.lang.String apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(com.aliyun.ros.cdk.core.IResolvable apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getContentMode}
             * @param contentMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentMode(java.lang.String contentMode) {
                this.contentMode = contentMode;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getContentMode}
             * @param contentMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentMode(com.aliyun.ros.cdk.core.IResolvable contentMode) {
                this.contentMode = contentMode;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(java.lang.Number count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getIndustry}
             * @param industry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder industry(java.lang.String industry) {
                this.industry = industry;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getIndustry}
             * @param industry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder industry(com.aliyun.ros.cdk.core.IResolvable industry) {
                this.industry = industry;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getOptionArgs}
             * @param optionArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder optionArgs(java.lang.String optionArgs) {
                this.optionArgs = optionArgs;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getOptionArgs}
             * @param optionArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder optionArgs(com.aliyun.ros.cdk.core.IResolvable optionArgs) {
                this.optionArgs = optionArgs;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(java.lang.Number start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(com.aliyun.ros.cdk.core.IResolvable start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getTimeRange}
             * @param timeRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeRange(com.aliyun.ros.cdk.core.IResolvable timeRange) {
                this.timeRange = timeRange;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getTimeRange}
             * @param timeRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeRange(java.util.Map<java.lang.String, ? extends java.lang.Object> timeRange) {
                this.timeRange = timeRange;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SearchEngineConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SearchEngineConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SearchEngineConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SearchEngineConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SearchEngineConfigProperty {
            private final java.lang.Object apiKey;
            private final java.lang.Object contentMode;
            private final java.lang.Object count;
            private final java.lang.Object endpoint;
            private final java.lang.Object industry;
            private final java.lang.Object optionArgs;
            private final java.lang.Object start;
            private final java.lang.Object timeoutMillisecond;
            private final java.lang.Object timeRange;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiKey = software.amazon.jsii.Kernel.get(this, "apiKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentMode = software.amazon.jsii.Kernel.get(this, "contentMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.industry = software.amazon.jsii.Kernel.get(this, "industry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.optionArgs = software.amazon.jsii.Kernel.get(this, "optionArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeRange = software.amazon.jsii.Kernel.get(this, "timeRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiKey = builder.apiKey;
                this.contentMode = builder.contentMode;
                this.count = builder.count;
                this.endpoint = builder.endpoint;
                this.industry = builder.industry;
                this.optionArgs = builder.optionArgs;
                this.start = builder.start;
                this.timeoutMillisecond = builder.timeoutMillisecond;
                this.timeRange = builder.timeRange;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getApiKey() {
                return this.apiKey;
            }

            @Override
            public final java.lang.Object getContentMode() {
                return this.contentMode;
            }

            @Override
            public final java.lang.Object getCount() {
                return this.count;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getIndustry() {
                return this.industry;
            }

            @Override
            public final java.lang.Object getOptionArgs() {
                return this.optionArgs;
            }

            @Override
            public final java.lang.Object getStart() {
                return this.start;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getTimeRange() {
                return this.timeRange;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApiKey() != null) {
                    data.set("apiKey", om.valueToTree(this.getApiKey()));
                }
                if (this.getContentMode() != null) {
                    data.set("contentMode", om.valueToTree(this.getContentMode()));
                }
                if (this.getCount() != null) {
                    data.set("count", om.valueToTree(this.getCount()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }
                if (this.getIndustry() != null) {
                    data.set("industry", om.valueToTree(this.getIndustry()));
                }
                if (this.getOptionArgs() != null) {
                    data.set("optionArgs", om.valueToTree(this.getOptionArgs()));
                }
                if (this.getStart() != null) {
                    data.set("start", om.valueToTree(this.getStart()));
                }
                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }
                if (this.getTimeRange() != null) {
                    data.set("timeRange", om.valueToTree(this.getTimeRange()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.SearchEngineConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SearchEngineConfigProperty.Jsii$Proxy that = (SearchEngineConfigProperty.Jsii$Proxy) o;

                if (this.apiKey != null ? !this.apiKey.equals(that.apiKey) : that.apiKey != null) return false;
                if (this.contentMode != null ? !this.contentMode.equals(that.contentMode) : that.contentMode != null) return false;
                if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
                if (this.endpoint != null ? !this.endpoint.equals(that.endpoint) : that.endpoint != null) return false;
                if (this.industry != null ? !this.industry.equals(that.industry) : that.industry != null) return false;
                if (this.optionArgs != null ? !this.optionArgs.equals(that.optionArgs) : that.optionArgs != null) return false;
                if (this.start != null ? !this.start.equals(that.start) : that.start != null) return false;
                if (this.timeoutMillisecond != null ? !this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond != null) return false;
                if (this.timeRange != null ? !this.timeRange.equals(that.timeRange) : that.timeRange != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiKey != null ? this.apiKey.hashCode() : 0;
                result = 31 * result + (this.contentMode != null ? this.contentMode.hashCode() : 0);
                result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                result = 31 * result + (this.industry != null ? this.industry.hashCode() : 0);
                result = 31 * result + (this.optionArgs != null ? this.optionArgs.hashCode() : 0);
                result = 31 * result + (this.start != null ? this.start.hashCode() : 0);
                result = 31 * result + (this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0);
                result = 31 * result + (this.timeRange != null ? this.timeRange.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.SearchFromProperty")
    @software.amazon.jsii.Jsii.Proxy(SearchFromProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SearchFromProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndustry() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOptionArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStart() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeRange() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SearchFromProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SearchFromProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SearchFromProperty> {
            java.lang.Object apiKey;
            java.lang.Object contentMode;
            java.lang.Object count;
            java.lang.Object endpoint;
            java.lang.Object industry;
            java.lang.Object optionArgs;
            java.lang.Object start;
            java.lang.Object timeoutMillisecond;
            java.lang.Object timeRange;
            java.lang.Object type;

            /**
             * Sets the value of {@link SearchFromProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(java.lang.String apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(com.aliyun.ros.cdk.core.IResolvable apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getContentMode}
             * @param contentMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentMode(java.lang.String contentMode) {
                this.contentMode = contentMode;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getContentMode}
             * @param contentMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentMode(com.aliyun.ros.cdk.core.IResolvable contentMode) {
                this.contentMode = contentMode;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(java.lang.Number count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getCount}
             * @param count the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
                this.count = count;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getIndustry}
             * @param industry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder industry(java.lang.String industry) {
                this.industry = industry;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getIndustry}
             * @param industry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder industry(com.aliyun.ros.cdk.core.IResolvable industry) {
                this.industry = industry;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getOptionArgs}
             * @param optionArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder optionArgs(java.lang.String optionArgs) {
                this.optionArgs = optionArgs;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getOptionArgs}
             * @param optionArgs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder optionArgs(com.aliyun.ros.cdk.core.IResolvable optionArgs) {
                this.optionArgs = optionArgs;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(java.lang.Number start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getStart}
             * @param start the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder start(com.aliyun.ros.cdk.core.IResolvable start) {
                this.start = start;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getTimeRange}
             * @param timeRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeRange(com.aliyun.ros.cdk.core.IResolvable timeRange) {
                this.timeRange = timeRange;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getTimeRange}
             * @param timeRange the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeRange(java.util.Map<java.lang.String, ? extends java.lang.Object> timeRange) {
                this.timeRange = timeRange;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link SearchFromProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SearchFromProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SearchFromProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SearchFromProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SearchFromProperty {
            private final java.lang.Object apiKey;
            private final java.lang.Object contentMode;
            private final java.lang.Object count;
            private final java.lang.Object endpoint;
            private final java.lang.Object industry;
            private final java.lang.Object optionArgs;
            private final java.lang.Object start;
            private final java.lang.Object timeoutMillisecond;
            private final java.lang.Object timeRange;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiKey = software.amazon.jsii.Kernel.get(this, "apiKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentMode = software.amazon.jsii.Kernel.get(this, "contentMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.industry = software.amazon.jsii.Kernel.get(this, "industry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.optionArgs = software.amazon.jsii.Kernel.get(this, "optionArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.start = software.amazon.jsii.Kernel.get(this, "start", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeRange = software.amazon.jsii.Kernel.get(this, "timeRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiKey = builder.apiKey;
                this.contentMode = builder.contentMode;
                this.count = builder.count;
                this.endpoint = builder.endpoint;
                this.industry = builder.industry;
                this.optionArgs = builder.optionArgs;
                this.start = builder.start;
                this.timeoutMillisecond = builder.timeoutMillisecond;
                this.timeRange = builder.timeRange;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getApiKey() {
                return this.apiKey;
            }

            @Override
            public final java.lang.Object getContentMode() {
                return this.contentMode;
            }

            @Override
            public final java.lang.Object getCount() {
                return this.count;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getIndustry() {
                return this.industry;
            }

            @Override
            public final java.lang.Object getOptionArgs() {
                return this.optionArgs;
            }

            @Override
            public final java.lang.Object getStart() {
                return this.start;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getTimeRange() {
                return this.timeRange;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApiKey() != null) {
                    data.set("apiKey", om.valueToTree(this.getApiKey()));
                }
                if (this.getContentMode() != null) {
                    data.set("contentMode", om.valueToTree(this.getContentMode()));
                }
                if (this.getCount() != null) {
                    data.set("count", om.valueToTree(this.getCount()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }
                if (this.getIndustry() != null) {
                    data.set("industry", om.valueToTree(this.getIndustry()));
                }
                if (this.getOptionArgs() != null) {
                    data.set("optionArgs", om.valueToTree(this.getOptionArgs()));
                }
                if (this.getStart() != null) {
                    data.set("start", om.valueToTree(this.getStart()));
                }
                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }
                if (this.getTimeRange() != null) {
                    data.set("timeRange", om.valueToTree(this.getTimeRange()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.SearchFromProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SearchFromProperty.Jsii$Proxy that = (SearchFromProperty.Jsii$Proxy) o;

                if (this.apiKey != null ? !this.apiKey.equals(that.apiKey) : that.apiKey != null) return false;
                if (this.contentMode != null ? !this.contentMode.equals(that.contentMode) : that.contentMode != null) return false;
                if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
                if (this.endpoint != null ? !this.endpoint.equals(that.endpoint) : that.endpoint != null) return false;
                if (this.industry != null ? !this.industry.equals(that.industry) : that.industry != null) return false;
                if (this.optionArgs != null ? !this.optionArgs.equals(that.optionArgs) : that.optionArgs != null) return false;
                if (this.start != null ? !this.start.equals(that.start) : that.start != null) return false;
                if (this.timeoutMillisecond != null ? !this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond != null) return false;
                if (this.timeRange != null ? !this.timeRange.equals(that.timeRange) : that.timeRange != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiKey != null ? this.apiKey.hashCode() : 0;
                result = 31 * result + (this.contentMode != null ? this.contentMode.hashCode() : 0);
                result = 31 * result + (this.count != null ? this.count.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                result = 31 * result + (this.industry != null ? this.industry.hashCode() : 0);
                result = 31 * result + (this.optionArgs != null ? this.optionArgs.hashCode() : 0);
                result = 31 * result + (this.start != null ? this.start.hashCode() : 0);
                result = 31 * result + (this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0);
                result = 31 * result + (this.timeRange != null ? this.timeRange.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.SearchRewriteProperty")
    @software.amazon.jsii.Jsii.Proxy(SearchRewriteProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SearchRewriteProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SearchRewriteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SearchRewriteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SearchRewriteProperty> {
            java.lang.Object enable;
            java.lang.Object maxCount;
            java.lang.Object modelName;
            java.lang.Object serviceId;
            java.lang.Object timeoutMillisecond;

            /**
             * Sets the value of {@link SearchRewriteProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getMaxCount}
             * @param maxCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCount(java.lang.Number maxCount) {
                this.maxCount = maxCount;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getMaxCount}
             * @param maxCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxCount(com.aliyun.ros.cdk.core.IResolvable maxCount) {
                this.maxCount = maxCount;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(java.lang.String modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SearchRewriteProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SearchRewriteProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SearchRewriteProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SearchRewriteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SearchRewriteProperty {
            private final java.lang.Object enable;
            private final java.lang.Object maxCount;
            private final java.lang.Object modelName;
            private final java.lang.Object serviceId;
            private final java.lang.Object timeoutMillisecond;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxCount = software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = builder.enable;
                this.maxCount = builder.maxCount;
                this.modelName = builder.modelName;
                this.serviceId = builder.serviceId;
                this.timeoutMillisecond = builder.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getMaxCount() {
                return this.maxCount;
            }

            @Override
            public final java.lang.Object getModelName() {
                return this.modelName;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getMaxCount() != null) {
                    data.set("maxCount", om.valueToTree(this.getMaxCount()));
                }
                if (this.getModelName() != null) {
                    data.set("modelName", om.valueToTree(this.getModelName()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.SearchRewriteProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SearchRewriteProperty.Jsii$Proxy that = (SearchRewriteProperty.Jsii$Proxy) o;

                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.maxCount != null ? !this.maxCount.equals(that.maxCount) : that.maxCount != null) return false;
                if (this.modelName != null ? !this.modelName.equals(that.modelName) : that.modelName != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                return this.timeoutMillisecond != null ? this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable != null ? this.enable.hashCode() : 0;
                result = 31 * result + (this.maxCount != null ? this.maxCount.hashCode() : 0);
                result = 31 * result + (this.modelName != null ? this.modelName.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.SemanticRouterConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SemanticRouterConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SemanticRouterConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SemanticRouterConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SemanticRouterConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SemanticRouterConfigProperty> {
            java.lang.Object timeoutMillisecond;

            /**
             * Sets the value of {@link SemanticRouterConfigProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link SemanticRouterConfigProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SemanticRouterConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SemanticRouterConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SemanticRouterConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SemanticRouterConfigProperty {
            private final java.lang.Object timeoutMillisecond;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.timeoutMillisecond = builder.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.SemanticRouterConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SemanticRouterConfigProperty.Jsii$Proxy that = (SemanticRouterConfigProperty.Jsii$Proxy) o;

                return this.timeoutMillisecond != null ? this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond == null;
            }

            @Override
            public final int hashCode() {
                int result = this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ServiceConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIntentCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelNamePattern() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMultiServiceRouteStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getObservabilityRouteConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceConfigsProperty> {
            java.lang.Object gatewayServiceId;
            java.lang.Object intentCode;
            java.lang.Object match;
            java.lang.Object modelName;
            java.lang.Object modelNamePattern;
            java.lang.Object multiServiceRouteStrategy;
            java.lang.Object name;
            java.lang.Object observabilityRouteConfig;
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object serviceId;
            java.lang.Object version;
            java.lang.Object weight;

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGatewayServiceId}
             * @param gatewayServiceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayServiceId(java.lang.String gatewayServiceId) {
                this.gatewayServiceId = gatewayServiceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGatewayServiceId}
             * @param gatewayServiceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayServiceId(com.aliyun.ros.cdk.core.IResolvable gatewayServiceId) {
                this.gatewayServiceId = gatewayServiceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getIntentCode}
             * @param intentCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder intentCode(java.lang.String intentCode) {
                this.intentCode = intentCode;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getIntentCode}
             * @param intentCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder intentCode(com.aliyun.ros.cdk.core.IResolvable intentCode) {
                this.intentCode = intentCode;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getMatch}
             * @param match the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getMatch}
             * @param match the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.apig.RosHttpApi.MatchProperty match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(java.lang.String modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getModelNamePattern}
             * @param modelNamePattern the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelNamePattern(java.lang.String modelNamePattern) {
                this.modelNamePattern = modelNamePattern;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getModelNamePattern}
             * @param modelNamePattern the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelNamePattern(com.aliyun.ros.cdk.core.IResolvable modelNamePattern) {
                this.modelNamePattern = modelNamePattern;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getMultiServiceRouteStrategy}
             * @param multiServiceRouteStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder multiServiceRouteStrategy(java.lang.String multiServiceRouteStrategy) {
                this.multiServiceRouteStrategy = multiServiceRouteStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getMultiServiceRouteStrategy}
             * @param multiServiceRouteStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder multiServiceRouteStrategy(com.aliyun.ros.cdk.core.IResolvable multiServiceRouteStrategy) {
                this.multiServiceRouteStrategy = multiServiceRouteStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getObservabilityRouteConfig}
             * @param observabilityRouteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder observabilityRouteConfig(com.aliyun.ros.cdk.core.IResolvable observabilityRouteConfig) {
                this.observabilityRouteConfig = observabilityRouteConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getObservabilityRouteConfig}
             * @param observabilityRouteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder observabilityRouteConfig(com.aliyun.ros.cdk.apig.RosHttpApi.ObservabilityRouteConfigProperty observabilityRouteConfig) {
                this.observabilityRouteConfig = observabilityRouteConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceConfigsProperty {
            private final java.lang.Object gatewayServiceId;
            private final java.lang.Object intentCode;
            private final java.lang.Object match;
            private final java.lang.Object modelName;
            private final java.lang.Object modelNamePattern;
            private final java.lang.Object multiServiceRouteStrategy;
            private final java.lang.Object name;
            private final java.lang.Object observabilityRouteConfig;
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object serviceId;
            private final java.lang.Object version;
            private final java.lang.Object weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.gatewayServiceId = software.amazon.jsii.Kernel.get(this, "gatewayServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.intentCode = software.amazon.jsii.Kernel.get(this, "intentCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modelNamePattern = software.amazon.jsii.Kernel.get(this, "modelNamePattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.multiServiceRouteStrategy = software.amazon.jsii.Kernel.get(this, "multiServiceRouteStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.observabilityRouteConfig = software.amazon.jsii.Kernel.get(this, "observabilityRouteConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.gatewayServiceId = builder.gatewayServiceId;
                this.intentCode = builder.intentCode;
                this.match = builder.match;
                this.modelName = builder.modelName;
                this.modelNamePattern = builder.modelNamePattern;
                this.multiServiceRouteStrategy = builder.multiServiceRouteStrategy;
                this.name = builder.name;
                this.observabilityRouteConfig = builder.observabilityRouteConfig;
                this.port = builder.port;
                this.protocol = builder.protocol;
                this.serviceId = builder.serviceId;
                this.version = builder.version;
                this.weight = builder.weight;
            }

            @Override
            public final java.lang.Object getGatewayServiceId() {
                return this.gatewayServiceId;
            }

            @Override
            public final java.lang.Object getIntentCode() {
                return this.intentCode;
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getModelName() {
                return this.modelName;
            }

            @Override
            public final java.lang.Object getModelNamePattern() {
                return this.modelNamePattern;
            }

            @Override
            public final java.lang.Object getMultiServiceRouteStrategy() {
                return this.multiServiceRouteStrategy;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getObservabilityRouteConfig() {
                return this.observabilityRouteConfig;
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
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getGatewayServiceId() != null) {
                    data.set("gatewayServiceId", om.valueToTree(this.getGatewayServiceId()));
                }
                if (this.getIntentCode() != null) {
                    data.set("intentCode", om.valueToTree(this.getIntentCode()));
                }
                if (this.getMatch() != null) {
                    data.set("match", om.valueToTree(this.getMatch()));
                }
                if (this.getModelName() != null) {
                    data.set("modelName", om.valueToTree(this.getModelName()));
                }
                if (this.getModelNamePattern() != null) {
                    data.set("modelNamePattern", om.valueToTree(this.getModelNamePattern()));
                }
                if (this.getMultiServiceRouteStrategy() != null) {
                    data.set("multiServiceRouteStrategy", om.valueToTree(this.getMultiServiceRouteStrategy()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getObservabilityRouteConfig() != null) {
                    data.set("observabilityRouteConfig", om.valueToTree(this.getObservabilityRouteConfig()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }
                if (this.getWeight() != null) {
                    data.set("weight", om.valueToTree(this.getWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ServiceConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceConfigsProperty.Jsii$Proxy that = (ServiceConfigsProperty.Jsii$Proxy) o;

                if (this.gatewayServiceId != null ? !this.gatewayServiceId.equals(that.gatewayServiceId) : that.gatewayServiceId != null) return false;
                if (this.intentCode != null ? !this.intentCode.equals(that.intentCode) : that.intentCode != null) return false;
                if (this.match != null ? !this.match.equals(that.match) : that.match != null) return false;
                if (this.modelName != null ? !this.modelName.equals(that.modelName) : that.modelName != null) return false;
                if (this.modelNamePattern != null ? !this.modelNamePattern.equals(that.modelNamePattern) : that.modelNamePattern != null) return false;
                if (this.multiServiceRouteStrategy != null ? !this.multiServiceRouteStrategy.equals(that.multiServiceRouteStrategy) : that.multiServiceRouteStrategy != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.observabilityRouteConfig != null ? !this.observabilityRouteConfig.equals(that.observabilityRouteConfig) : that.observabilityRouteConfig != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                if (this.version != null ? !this.version.equals(that.version) : that.version != null) return false;
                return this.weight != null ? this.weight.equals(that.weight) : that.weight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.gatewayServiceId != null ? this.gatewayServiceId.hashCode() : 0;
                result = 31 * result + (this.intentCode != null ? this.intentCode.hashCode() : 0);
                result = 31 * result + (this.match != null ? this.match.hashCode() : 0);
                result = 31 * result + (this.modelName != null ? this.modelName.hashCode() : 0);
                result = 31 * result + (this.modelNamePattern != null ? this.modelNamePattern.hashCode() : 0);
                result = 31 * result + (this.multiServiceRouteStrategy != null ? this.multiServiceRouteStrategy.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.observabilityRouteConfig != null ? this.observabilityRouteConfig.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                result = 31 * result + (this.weight != null ? this.weight.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ServicesProperty")
    @software.amazon.jsii.Jsii.Proxy(ServicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServicesProperty> {
            java.lang.Object name;
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object serviceId;
            java.lang.Object version;
            java.lang.Object weight;

            /**
             * Sets the value of {@link ServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link ServicesProperty#getWeight}
             * @param weight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServicesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServicesProperty {
            private final java.lang.Object name;
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object serviceId;
            private final java.lang.Object version;
            private final java.lang.Object weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.port = builder.port;
                this.protocol = builder.protocol;
                this.serviceId = builder.serviceId;
                this.version = builder.version;
                this.weight = builder.weight;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }
                if (this.getWeight() != null) {
                    data.set("weight", om.valueToTree(this.getWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ServicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServicesProperty.Jsii$Proxy that = (ServicesProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                if (this.version != null ? !this.version.equals(that.version) : that.version != null) return false;
                return this.weight != null ? this.weight.equals(that.weight) : that.weight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                result = 31 * result + (this.weight != null ? this.weight.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.SubDomainsProperty")
    @software.amazon.jsii.Jsii.Proxy(SubDomainsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubDomainsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomainId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SubDomainsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubDomainsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubDomainsProperty> {
            java.lang.Object domainId;
            java.lang.Object name;
            java.lang.Object networkType;
            java.lang.Object protocol;

            /**
             * Sets the value of {@link SubDomainsProperty#getDomainId}
             * @param domainId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domainId(java.lang.String domainId) {
                this.domainId = domainId;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getDomainId}
             * @param domainId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domainId(com.aliyun.ros.cdk.core.IResolvable domainId) {
                this.domainId = domainId;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(java.lang.String networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getNetworkType}
             * @param networkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link SubDomainsProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubDomainsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubDomainsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SubDomainsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubDomainsProperty {
            private final java.lang.Object domainId;
            private final java.lang.Object name;
            private final java.lang.Object networkType;
            private final java.lang.Object protocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.domainId = software.amazon.jsii.Kernel.get(this, "domainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.domainId = builder.domainId;
                this.name = builder.name;
                this.networkType = builder.networkType;
                this.protocol = builder.protocol;
            }

            @Override
            public final java.lang.Object getDomainId() {
                return this.domainId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getNetworkType() {
                return this.networkType;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDomainId() != null) {
                    data.set("domainId", om.valueToTree(this.getDomainId()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getNetworkType() != null) {
                    data.set("networkType", om.valueToTree(this.getNetworkType()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.SubDomainsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubDomainsProperty.Jsii$Proxy that = (SubDomainsProperty.Jsii$Proxy) o;

                if (this.domainId != null ? !this.domainId.equals(that.domainId) : that.domainId != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
                return this.protocol != null ? this.protocol.equals(that.protocol) : that.protocol == null;
            }

            @Override
            public final int hashCode() {
                int result = this.domainId != null ? this.domainId.hashCode() : 0;
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ToolRerankingModelServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(ToolRerankingModelServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ToolRerankingModelServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMillisecond() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ToolRerankingModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ToolRerankingModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ToolRerankingModelServiceProperty> {
            java.lang.Object modelName;
            java.lang.Object serviceId;
            java.lang.Object timeoutMillisecond;

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(java.lang.String modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getModelName}
             * @param modelName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
                this.modelName = modelName;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getServiceId}
             * @param serviceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(java.lang.Number timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingModelServiceProperty#getTimeoutMillisecond}
             * @param timeoutMillisecond the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeoutMillisecond(com.aliyun.ros.cdk.core.IResolvable timeoutMillisecond) {
                this.timeoutMillisecond = timeoutMillisecond;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ToolRerankingModelServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ToolRerankingModelServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ToolRerankingModelServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ToolRerankingModelServiceProperty {
            private final java.lang.Object modelName;
            private final java.lang.Object serviceId;
            private final java.lang.Object timeoutMillisecond;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeoutMillisecond = software.amazon.jsii.Kernel.get(this, "timeoutMillisecond", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.modelName = builder.modelName;
                this.serviceId = builder.serviceId;
                this.timeoutMillisecond = builder.timeoutMillisecond;
            }

            @Override
            public final java.lang.Object getModelName() {
                return this.modelName;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getTimeoutMillisecond() {
                return this.timeoutMillisecond;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getModelName() != null) {
                    data.set("modelName", om.valueToTree(this.getModelName()));
                }
                if (this.getServiceId() != null) {
                    data.set("serviceId", om.valueToTree(this.getServiceId()));
                }
                if (this.getTimeoutMillisecond() != null) {
                    data.set("timeoutMillisecond", om.valueToTree(this.getTimeoutMillisecond()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ToolRerankingModelServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ToolRerankingModelServiceProperty.Jsii$Proxy that = (ToolRerankingModelServiceProperty.Jsii$Proxy) o;

                if (this.modelName != null ? !this.modelName.equals(that.modelName) : that.modelName != null) return false;
                if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
                return this.timeoutMillisecond != null ? this.timeoutMillisecond.equals(that.timeoutMillisecond) : that.timeoutMillisecond == null;
            }

            @Override
            public final int hashCode() {
                int result = this.modelName != null ? this.modelName.hashCode() : 0;
                result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
                result = 31 * result + (this.timeoutMillisecond != null ? this.timeoutMillisecond.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.ToolRerankingProperty")
    @software.amazon.jsii.Jsii.Proxy(ToolRerankingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ToolRerankingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFallbackStrategy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFilteringMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getModelService() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScoreThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTopKPercent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTopNCount() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ToolRerankingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ToolRerankingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ToolRerankingProperty> {
            java.lang.Object fallbackStrategy;
            java.lang.Object filteringMethod;
            java.lang.Object modelService;
            java.lang.Object scoreThreshold;
            java.lang.Object topKPercent;
            java.lang.Object topNCount;

            /**
             * Sets the value of {@link ToolRerankingProperty#getFallbackStrategy}
             * @param fallbackStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fallbackStrategy(java.lang.String fallbackStrategy) {
                this.fallbackStrategy = fallbackStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getFallbackStrategy}
             * @param fallbackStrategy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fallbackStrategy(com.aliyun.ros.cdk.core.IResolvable fallbackStrategy) {
                this.fallbackStrategy = fallbackStrategy;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getFilteringMethod}
             * @param filteringMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder filteringMethod(java.lang.String filteringMethod) {
                this.filteringMethod = filteringMethod;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getFilteringMethod}
             * @param filteringMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder filteringMethod(com.aliyun.ros.cdk.core.IResolvable filteringMethod) {
                this.filteringMethod = filteringMethod;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getModelService}
             * @param modelService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelService(com.aliyun.ros.cdk.core.IResolvable modelService) {
                this.modelService = modelService;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getModelService}
             * @param modelService the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder modelService(com.aliyun.ros.cdk.apig.RosHttpApi.ToolRerankingModelServiceProperty modelService) {
                this.modelService = modelService;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getScoreThreshold}
             * @param scoreThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scoreThreshold(java.lang.Number scoreThreshold) {
                this.scoreThreshold = scoreThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getScoreThreshold}
             * @param scoreThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scoreThreshold(com.aliyun.ros.cdk.core.IResolvable scoreThreshold) {
                this.scoreThreshold = scoreThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getTopKPercent}
             * @param topKPercent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topKPercent(java.lang.Number topKPercent) {
                this.topKPercent = topKPercent;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getTopKPercent}
             * @param topKPercent the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topKPercent(com.aliyun.ros.cdk.core.IResolvable topKPercent) {
                this.topKPercent = topKPercent;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getTopNCount}
             * @param topNCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topNCount(java.lang.Number topNCount) {
                this.topNCount = topNCount;
                return this;
            }

            /**
             * Sets the value of {@link ToolRerankingProperty#getTopNCount}
             * @param topNCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topNCount(com.aliyun.ros.cdk.core.IResolvable topNCount) {
                this.topNCount = topNCount;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ToolRerankingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ToolRerankingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ToolRerankingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ToolRerankingProperty {
            private final java.lang.Object fallbackStrategy;
            private final java.lang.Object filteringMethod;
            private final java.lang.Object modelService;
            private final java.lang.Object scoreThreshold;
            private final java.lang.Object topKPercent;
            private final java.lang.Object topNCount;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fallbackStrategy = software.amazon.jsii.Kernel.get(this, "fallbackStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.filteringMethod = software.amazon.jsii.Kernel.get(this, "filteringMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.modelService = software.amazon.jsii.Kernel.get(this, "modelService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scoreThreshold = software.amazon.jsii.Kernel.get(this, "scoreThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.topKPercent = software.amazon.jsii.Kernel.get(this, "topKPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.topNCount = software.amazon.jsii.Kernel.get(this, "topNCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fallbackStrategy = builder.fallbackStrategy;
                this.filteringMethod = builder.filteringMethod;
                this.modelService = builder.modelService;
                this.scoreThreshold = builder.scoreThreshold;
                this.topKPercent = builder.topKPercent;
                this.topNCount = builder.topNCount;
            }

            @Override
            public final java.lang.Object getFallbackStrategy() {
                return this.fallbackStrategy;
            }

            @Override
            public final java.lang.Object getFilteringMethod() {
                return this.filteringMethod;
            }

            @Override
            public final java.lang.Object getModelService() {
                return this.modelService;
            }

            @Override
            public final java.lang.Object getScoreThreshold() {
                return this.scoreThreshold;
            }

            @Override
            public final java.lang.Object getTopKPercent() {
                return this.topKPercent;
            }

            @Override
            public final java.lang.Object getTopNCount() {
                return this.topNCount;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getFallbackStrategy() != null) {
                    data.set("fallbackStrategy", om.valueToTree(this.getFallbackStrategy()));
                }
                if (this.getFilteringMethod() != null) {
                    data.set("filteringMethod", om.valueToTree(this.getFilteringMethod()));
                }
                if (this.getModelService() != null) {
                    data.set("modelService", om.valueToTree(this.getModelService()));
                }
                if (this.getScoreThreshold() != null) {
                    data.set("scoreThreshold", om.valueToTree(this.getScoreThreshold()));
                }
                if (this.getTopKPercent() != null) {
                    data.set("topKPercent", om.valueToTree(this.getTopKPercent()));
                }
                if (this.getTopNCount() != null) {
                    data.set("topNCount", om.valueToTree(this.getTopNCount()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.ToolRerankingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ToolRerankingProperty.Jsii$Proxy that = (ToolRerankingProperty.Jsii$Proxy) o;

                if (this.fallbackStrategy != null ? !this.fallbackStrategy.equals(that.fallbackStrategy) : that.fallbackStrategy != null) return false;
                if (this.filteringMethod != null ? !this.filteringMethod.equals(that.filteringMethod) : that.filteringMethod != null) return false;
                if (this.modelService != null ? !this.modelService.equals(that.modelService) : that.modelService != null) return false;
                if (this.scoreThreshold != null ? !this.scoreThreshold.equals(that.scoreThreshold) : that.scoreThreshold != null) return false;
                if (this.topKPercent != null ? !this.topKPercent.equals(that.topKPercent) : that.topKPercent != null) return false;
                return this.topNCount != null ? this.topNCount.equals(that.topNCount) : that.topNCount == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fallbackStrategy != null ? this.fallbackStrategy.hashCode() : 0;
                result = 31 * result + (this.filteringMethod != null ? this.filteringMethod.hashCode() : 0);
                result = 31 * result + (this.modelService != null ? this.modelService.hashCode() : 0);
                result = 31 * result + (this.scoreThreshold != null ? this.scoreThreshold.hashCode() : 0);
                result = 31 * result + (this.topKPercent != null ? this.topKPercent.hashCode() : 0);
                result = 31 * result + (this.topNCount != null ? this.topNCount.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.TriggerConditionsProperty")
    @software.amazon.jsii.Jsii.Proxy(TriggerConditionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TriggerConditionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMessageCountThreshold() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TriggerConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TriggerConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TriggerConditionsProperty> {
            java.lang.Object messageCountThreshold;

            /**
             * Sets the value of {@link TriggerConditionsProperty#getMessageCountThreshold}
             * @param messageCountThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder messageCountThreshold(java.lang.Number messageCountThreshold) {
                this.messageCountThreshold = messageCountThreshold;
                return this;
            }

            /**
             * Sets the value of {@link TriggerConditionsProperty#getMessageCountThreshold}
             * @param messageCountThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder messageCountThreshold(com.aliyun.ros.cdk.core.IResolvable messageCountThreshold) {
                this.messageCountThreshold = messageCountThreshold;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TriggerConditionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TriggerConditionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TriggerConditionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TriggerConditionsProperty {
            private final java.lang.Object messageCountThreshold;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.messageCountThreshold = software.amazon.jsii.Kernel.get(this, "messageCountThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.messageCountThreshold = builder.messageCountThreshold;
            }

            @Override
            public final java.lang.Object getMessageCountThreshold() {
                return this.messageCountThreshold;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMessageCountThreshold() != null) {
                    data.set("messageCountThreshold", om.valueToTree(this.getMessageCountThreshold()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.TriggerConditionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TriggerConditionsProperty.Jsii$Proxy that = (TriggerConditionsProperty.Jsii$Proxy) o;

                return this.messageCountThreshold != null ? this.messageCountThreshold.equals(that.messageCountThreshold) : that.messageCountThreshold == null;
            }

            @Override
            public final int hashCode() {
                int result = this.messageCountThreshold != null ? this.messageCountThreshold.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.VectorConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(VectorConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VectorConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCollectionId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServiceHost() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VectorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VectorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VectorConfigProperty> {
            java.lang.Object apiKey;
            java.lang.Object collectionId;
            java.lang.Object serviceHost;
            java.lang.Object threshold;
            java.lang.Object timeout;
            java.lang.Object type;

            /**
             * Sets the value of {@link VectorConfigProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(java.lang.String apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getApiKey}
             * @param apiKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKey(com.aliyun.ros.cdk.core.IResolvable apiKey) {
                this.apiKey = apiKey;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getCollectionId}
             * @param collectionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder collectionId(java.lang.String collectionId) {
                this.collectionId = collectionId;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getCollectionId}
             * @param collectionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder collectionId(com.aliyun.ros.cdk.core.IResolvable collectionId) {
                this.collectionId = collectionId;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getServiceHost}
             * @param serviceHost the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHost(java.lang.String serviceHost) {
                this.serviceHost = serviceHost;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getServiceHost}
             * @param serviceHost the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHost(com.aliyun.ros.cdk.core.IResolvable serviceHost) {
                this.serviceHost = serviceHost;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(java.lang.Number threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getThreshold}
             * @param threshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threshold(com.aliyun.ros.cdk.core.IResolvable threshold) {
                this.threshold = threshold;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link VectorConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VectorConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VectorConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VectorConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VectorConfigProperty {
            private final java.lang.Object apiKey;
            private final java.lang.Object collectionId;
            private final java.lang.Object serviceHost;
            private final java.lang.Object threshold;
            private final java.lang.Object timeout;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiKey = software.amazon.jsii.Kernel.get(this, "apiKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.collectionId = software.amazon.jsii.Kernel.get(this, "collectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceHost = software.amazon.jsii.Kernel.get(this, "serviceHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threshold = software.amazon.jsii.Kernel.get(this, "threshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiKey = builder.apiKey;
                this.collectionId = builder.collectionId;
                this.serviceHost = builder.serviceHost;
                this.threshold = builder.threshold;
                this.timeout = builder.timeout;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getApiKey() {
                return this.apiKey;
            }

            @Override
            public final java.lang.Object getCollectionId() {
                return this.collectionId;
            }

            @Override
            public final java.lang.Object getServiceHost() {
                return this.serviceHost;
            }

            @Override
            public final java.lang.Object getThreshold() {
                return this.threshold;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApiKey() != null) {
                    data.set("apiKey", om.valueToTree(this.getApiKey()));
                }
                if (this.getCollectionId() != null) {
                    data.set("collectionId", om.valueToTree(this.getCollectionId()));
                }
                if (this.getServiceHost() != null) {
                    data.set("serviceHost", om.valueToTree(this.getServiceHost()));
                }
                if (this.getThreshold() != null) {
                    data.set("threshold", om.valueToTree(this.getThreshold()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.VectorConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VectorConfigProperty.Jsii$Proxy that = (VectorConfigProperty.Jsii$Proxy) o;

                if (this.apiKey != null ? !this.apiKey.equals(that.apiKey) : that.apiKey != null) return false;
                if (this.collectionId != null ? !this.collectionId.equals(that.collectionId) : that.collectionId != null) return false;
                if (this.serviceHost != null ? !this.serviceHost.equals(that.serviceHost) : that.serviceHost != null) return false;
                if (this.threshold != null ? !this.threshold.equals(that.threshold) : that.threshold != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiKey != null ? this.apiKey.hashCode() : 0;
                result = 31 * result + (this.collectionId != null ? this.collectionId.hashCode() : 0);
                result = 31 * result + (this.serviceHost != null ? this.serviceHost.hashCode() : 0);
                result = 31 * result + (this.threshold != null ? this.threshold.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.VersionConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(VersionConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VersionConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VersionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VersionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VersionConfigProperty> {
            java.lang.Object enable;
            java.lang.Object headerName;
            java.lang.Object queryName;
            java.lang.Object scheme;
            java.lang.Object version;

            /**
             * Sets the value of {@link VersionConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getHeaderName}
             * @param headerName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerName(java.lang.String headerName) {
                this.headerName = headerName;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getHeaderName}
             * @param headerName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerName(com.aliyun.ros.cdk.core.IResolvable headerName) {
                this.headerName = headerName;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getQueryName}
             * @param queryName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryName(java.lang.String queryName) {
                this.queryName = queryName;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getQueryName}
             * @param queryName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryName(com.aliyun.ros.cdk.core.IResolvable queryName) {
                this.queryName = queryName;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(java.lang.String scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getScheme}
             * @param scheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder scheme(com.aliyun.ros.cdk.core.IResolvable scheme) {
                this.scheme = scheme;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link VersionConfigProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VersionConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VersionConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VersionConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VersionConfigProperty {
            private final java.lang.Object enable;
            private final java.lang.Object headerName;
            private final java.lang.Object queryName;
            private final java.lang.Object scheme;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerName = software.amazon.jsii.Kernel.get(this, "headerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryName = software.amazon.jsii.Kernel.get(this, "queryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.scheme = software.amazon.jsii.Kernel.get(this, "scheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = builder.enable;
                this.headerName = builder.headerName;
                this.queryName = builder.queryName;
                this.scheme = builder.scheme;
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getHeaderName() {
                return this.headerName;
            }

            @Override
            public final java.lang.Object getQueryName() {
                return this.queryName;
            }

            @Override
            public final java.lang.Object getScheme() {
                return this.scheme;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getHeaderName() != null) {
                    data.set("headerName", om.valueToTree(this.getHeaderName()));
                }
                if (this.getQueryName() != null) {
                    data.set("queryName", om.valueToTree(this.getQueryName()));
                }
                if (this.getScheme() != null) {
                    data.set("scheme", om.valueToTree(this.getScheme()));
                }
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.VersionConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VersionConfigProperty.Jsii$Proxy that = (VersionConfigProperty.Jsii$Proxy) o;

                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.headerName != null ? !this.headerName.equals(that.headerName) : that.headerName != null) return false;
                if (this.queryName != null ? !this.queryName.equals(that.queryName) : that.queryName != null) return false;
                if (this.scheme != null ? !this.scheme.equals(that.scheme) : that.scheme != null) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable != null ? this.enable.hashCode() : 0;
                result = 31 * result + (this.headerName != null ? this.headerName.hashCode() : 0);
                result = 31 * result + (this.queryName != null ? this.queryName.hashCode() : 0);
                result = 31 * result + (this.scheme != null ? this.scheme.hashCode() : 0);
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosHttpApi.VpcInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcInfoProperty> {
            java.lang.Object name;
            java.lang.Object vpcId;

            /**
             * Sets the value of {@link VpcInfoProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcInfoProperty {
            private final java.lang.Object name;
            private final java.lang.Object vpcId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
                this.vpcId = builder.vpcId;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
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

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosHttpApi.VpcInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcInfoProperty.Jsii$Proxy that = (VpcInfoProperty.Jsii$Proxy) o;

                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosHttpApi}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosHttpApi> {
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
        private final com.aliyun.ros.cdk.apig.RosHttpApiProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosHttpApiProps.Builder();
        }

        /**
         * @return {@code this}
         * @param httpApiName This parameter is required.
         */
        public Builder httpApiName(final java.lang.String httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpApiName This parameter is required.
         */
        public Builder httpApiName(final com.aliyun.ros.cdk.core.IResolvable httpApiName) {
            this.props.httpApiName(httpApiName);
            return this;
        }

        /**
         * @return {@code this}
         * @param agentProtocols This parameter is required.
         */
        public Builder agentProtocols(final com.aliyun.ros.cdk.core.IResolvable agentProtocols) {
            this.props.agentProtocols(agentProtocols);
            return this;
        }
        /**
         * @return {@code this}
         * @param agentProtocols This parameter is required.
         */
        public Builder agentProtocols(final java.util.List<? extends java.lang.Object> agentProtocols) {
            this.props.agentProtocols(agentProtocols);
            return this;
        }

        /**
         * @return {@code this}
         * @param aiProtocols This parameter is required.
         */
        public Builder aiProtocols(final com.aliyun.ros.cdk.core.IResolvable aiProtocols) {
            this.props.aiProtocols(aiProtocols);
            return this;
        }
        /**
         * @return {@code this}
         * @param aiProtocols This parameter is required.
         */
        public Builder aiProtocols(final java.util.List<? extends java.lang.Object> aiProtocols) {
            this.props.aiProtocols(aiProtocols);
            return this;
        }

        /**
         * @return {@code this}
         * @param authConfig This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param authConfig This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.AuthConfigProperty authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param basePath This parameter is required.
         */
        public Builder basePath(final java.lang.String basePath) {
            this.props.basePath(basePath);
            return this;
        }
        /**
         * @return {@code this}
         * @param basePath This parameter is required.
         */
        public Builder basePath(final com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.props.basePath(basePath);
            return this;
        }

        /**
         * @return {@code this}
         * @param belongGatewayId This parameter is required.
         */
        public Builder belongGatewayId(final java.lang.String belongGatewayId) {
            this.props.belongGatewayId(belongGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param belongGatewayId This parameter is required.
         */
        public Builder belongGatewayId(final com.aliyun.ros.cdk.core.IResolvable belongGatewayId) {
            this.props.belongGatewayId(belongGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param builtinRouteNames This parameter is required.
         */
        public Builder builtinRouteNames(final com.aliyun.ros.cdk.core.IResolvable builtinRouteNames) {
            this.props.builtinRouteNames(builtinRouteNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param builtinRouteNames This parameter is required.
         */
        public Builder builtinRouteNames(final java.util.List<? extends java.lang.Object> builtinRouteNames) {
            this.props.builtinRouteNames(builtinRouteNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployConfigs This parameter is required.
         */
        public Builder deployConfigs(final com.aliyun.ros.cdk.core.IResolvable deployConfigs) {
            this.props.deployConfigs(deployConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployConfigs This parameter is required.
         */
        public Builder deployConfigs(final java.util.List<? extends java.lang.Object> deployConfigs) {
            this.props.deployConfigs(deployConfigs);
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
         * @param enableAuth This parameter is required.
         */
        public Builder enableAuth(final java.lang.Boolean enableAuth) {
            this.props.enableAuth(enableAuth);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAuth This parameter is required.
         */
        public Builder enableAuth(final com.aliyun.ros.cdk.core.IResolvable enableAuth) {
            this.props.enableAuth(enableAuth);
            return this;
        }

        /**
         * @return {@code this}
         * @param firstByteTimeout This parameter is required.
         */
        public Builder firstByteTimeout(final java.lang.Number firstByteTimeout) {
            this.props.firstByteTimeout(firstByteTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param firstByteTimeout This parameter is required.
         */
        public Builder firstByteTimeout(final com.aliyun.ros.cdk.core.IResolvable firstByteTimeout) {
            this.props.firstByteTimeout(firstByteTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param ingressConfig This parameter is required.
         */
        public Builder ingressConfig(final com.aliyun.ros.cdk.core.IResolvable ingressConfig) {
            this.props.ingressConfig(ingressConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ingressConfig This parameter is required.
         */
        public Builder ingressConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.IngressConfigProperty ingressConfig) {
            this.props.ingressConfig(ingressConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param modelCategory This parameter is required.
         */
        public Builder modelCategory(final java.lang.String modelCategory) {
            this.props.modelCategory(modelCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param modelCategory This parameter is required.
         */
        public Builder modelCategory(final com.aliyun.ros.cdk.core.IResolvable modelCategory) {
            this.props.modelCategory(modelCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param onlyChangeConfig This parameter is required.
         */
        public Builder onlyChangeConfig(final java.lang.Boolean onlyChangeConfig) {
            this.props.onlyChangeConfig(onlyChangeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param onlyChangeConfig This parameter is required.
         */
        public Builder onlyChangeConfig(final com.aliyun.ros.cdk.core.IResolvable onlyChangeConfig) {
            this.props.onlyChangeConfig(onlyChangeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocols This parameter is required.
         */
        public Builder protocols(final com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.props.protocols(protocols);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocols This parameter is required.
         */
        public Builder protocols(final java.util.List<? extends java.lang.Object> protocols) {
            this.props.protocols(protocols);
            return this;
        }

        /**
         * @return {@code this}
         * @param removeBasePathOnForward This parameter is required.
         */
        public Builder removeBasePathOnForward(final java.lang.Boolean removeBasePathOnForward) {
            this.props.removeBasePathOnForward(removeBasePathOnForward);
            return this;
        }
        /**
         * @return {@code this}
         * @param removeBasePathOnForward This parameter is required.
         */
        public Builder removeBasePathOnForward(final com.aliyun.ros.cdk.core.IResolvable removeBasePathOnForward) {
            this.props.removeBasePathOnForward(removeBasePathOnForward);
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
         * @param strategy This parameter is required.
         */
        public Builder strategy(final java.lang.String strategy) {
            this.props.strategy(strategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param strategy This parameter is required.
         */
        public Builder strategy(final com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.props.strategy(strategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionConfig This parameter is required.
         */
        public Builder versionConfig(final com.aliyun.ros.cdk.core.IResolvable versionConfig) {
            this.props.versionConfig(versionConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionConfig This parameter is required.
         */
        public Builder versionConfig(final com.aliyun.ros.cdk.apig.RosHttpApi.VersionConfigProperty versionConfig) {
            this.props.versionConfig(versionConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosHttpApi}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosHttpApi build() {
            return new com.aliyun.ros.cdk.apig.RosHttpApi(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
