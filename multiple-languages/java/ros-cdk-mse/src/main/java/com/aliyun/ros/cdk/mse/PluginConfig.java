package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::PluginConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.230Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.PluginConfig")
public class PluginConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.IPluginConfig {

    protected PluginConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PluginConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PluginConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.PluginConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PluginConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.PluginConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PluginConfigId: The ID of the plugin config.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.PluginConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.PluginConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.PluginConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.PluginConfig> {
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
        private final com.aliyun.ros.cdk.mse.PluginConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.PluginConfigProps.Builder();
        }

        /**
         * Property configLevel: The scope of the plugin application.
         * <p>
         * <ul>
         * <li>0: Global</li>
         * <li>1: Route</li>
         * <li>2: Domain</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param configLevel Property configLevel: The scope of the plugin application. This parameter is required.
         */
        public Builder configLevel(final java.lang.Number configLevel) {
            this.props.configLevel(configLevel);
            return this;
        }
        /**
         * Property configLevel: The scope of the plugin application.
         * <p>
         * <ul>
         * <li>0: Global</li>
         * <li>1: Route</li>
         * <li>2: Domain</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param configLevel Property configLevel: The scope of the plugin application. This parameter is required.
         */
        public Builder configLevel(final com.aliyun.ros.cdk.core.IResolvable configLevel) {
            this.props.configLevel(configLevel);
            return this;
        }

        /**
         * Property enable: Whether to enable the plugin.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to enable the plugin. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Whether to enable the plugin.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to enable the plugin. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * Property pluginId: The ID of the gateway plugin.
         * <p>
         * @return {@code this}
         * @param pluginId Property pluginId: The ID of the gateway plugin. This parameter is required.
         */
        public Builder pluginId(final java.lang.Number pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }
        /**
         * Property pluginId: The ID of the gateway plugin.
         * <p>
         * @return {@code this}
         * @param pluginId Property pluginId: The ID of the gateway plugin. This parameter is required.
         */
        public Builder pluginId(final com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }

        /**
         * Property config: The configuration of the plugin.
         * <p>
         * For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the plugin. This parameter is required.
         */
        public Builder config(final java.lang.String config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: The configuration of the plugin.
         * <p>
         * For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the plugin. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }

        /**
         * Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
         * <p>
         * @return {@code this}
         * @param resourceIdList Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel). This parameter is required.
         */
        public Builder resourceIdList(final com.aliyun.ros.cdk.core.IResolvable resourceIdList) {
            this.props.resourceIdList(resourceIdList);
            return this;
        }
        /**
         * Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
         * <p>
         * @return {@code this}
         * @param resourceIdList Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel). This parameter is required.
         */
        public Builder resourceIdList(final java.util.List<? extends java.lang.Object> resourceIdList) {
            this.props.resourceIdList(resourceIdList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.PluginConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.PluginConfig build() {
            return new com.aliyun.ros.cdk.mse.PluginConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
