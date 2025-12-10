package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>PluginConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.232Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.PluginConfigProps")
@software.amazon.jsii.Jsii.Proxy(PluginConfigProps.Jsii$Proxy.class)
public interface PluginConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configLevel: The scope of the plugin application.
     * <p>
     * <ul>
     * <li>0: Global</li>
     * <li>1: Route</li>
     * <li>2: Domain</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigLevel();

    /**
     * Property enable: Whether to enable the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

    /**
     * Property gatewayUniqueId: The unique ID of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId();

    /**
     * Property pluginId: The ID of the gateway plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginId();

    /**
     * Property config: The configuration of the plugin.
     * <p>
     * For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceIdList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PluginConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginConfigProps> {
        java.lang.Object configLevel;
        java.lang.Object enable;
        java.lang.Object gatewayUniqueId;
        java.lang.Object pluginId;
        java.lang.Object config;
        java.lang.Object resourceIdList;

        /**
         * Sets the value of {@link PluginConfigProps#getConfigLevel}
         * @param configLevel Property configLevel: The scope of the plugin application. This parameter is required.
         *                    <ul>
         *                    <li>0: Global</li>
         *                    <li>1: Route</li>
         *                    <li>2: Domain</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder configLevel(java.lang.Number configLevel) {
            this.configLevel = configLevel;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getConfigLevel}
         * @param configLevel Property configLevel: The scope of the plugin application. This parameter is required.
         *                    <ul>
         *                    <li>0: Global</li>
         *                    <li>1: Route</li>
         *                    <li>2: Domain</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder configLevel(com.aliyun.ros.cdk.core.IResolvable configLevel) {
            this.configLevel = configLevel;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getEnable}
         * @param enable Property enable: Whether to enable the plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getEnable}
         * @param enable Property enable: Whether to enable the plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(java.lang.String gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getGatewayUniqueId}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getPluginId}
         * @param pluginId Property pluginId: The ID of the gateway plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(java.lang.Number pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getPluginId}
         * @param pluginId Property pluginId: The ID of the gateway plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.pluginId = pluginId;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getConfig}
         * @param config Property config: The configuration of the plugin.
         *               For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
         * @return {@code this}
         */
        public Builder config(java.lang.String config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getConfig}
         * @param config Property config: The configuration of the plugin.
         *               For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getResourceIdList}
         * @param resourceIdList Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
         * @return {@code this}
         */
        public Builder resourceIdList(com.aliyun.ros.cdk.core.IResolvable resourceIdList) {
            this.resourceIdList = resourceIdList;
            return this;
        }

        /**
         * Sets the value of {@link PluginConfigProps#getResourceIdList}
         * @param resourceIdList Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
         * @return {@code this}
         */
        public Builder resourceIdList(java.util.List<? extends java.lang.Object> resourceIdList) {
            this.resourceIdList = resourceIdList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PluginConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PluginConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginConfigProps {
        private final java.lang.Object configLevel;
        private final java.lang.Object enable;
        private final java.lang.Object gatewayUniqueId;
        private final java.lang.Object pluginId;
        private final java.lang.Object config;
        private final java.lang.Object resourceIdList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configLevel = software.amazon.jsii.Kernel.get(this, "configLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayUniqueId = software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceIdList = software.amazon.jsii.Kernel.get(this, "resourceIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configLevel = java.util.Objects.requireNonNull(builder.configLevel, "configLevel is required");
            this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
            this.gatewayUniqueId = java.util.Objects.requireNonNull(builder.gatewayUniqueId, "gatewayUniqueId is required");
            this.pluginId = java.util.Objects.requireNonNull(builder.pluginId, "pluginId is required");
            this.config = builder.config;
            this.resourceIdList = builder.resourceIdList;
        }

        @Override
        public final java.lang.Object getConfigLevel() {
            return this.configLevel;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getGatewayUniqueId() {
            return this.gatewayUniqueId;
        }

        @Override
        public final java.lang.Object getPluginId() {
            return this.pluginId;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getResourceIdList() {
            return this.resourceIdList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configLevel", om.valueToTree(this.getConfigLevel()));
            data.set("enable", om.valueToTree(this.getEnable()));
            data.set("gatewayUniqueId", om.valueToTree(this.getGatewayUniqueId()));
            data.set("pluginId", om.valueToTree(this.getPluginId()));
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getResourceIdList() != null) {
                data.set("resourceIdList", om.valueToTree(this.getResourceIdList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.PluginConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginConfigProps.Jsii$Proxy that = (PluginConfigProps.Jsii$Proxy) o;

            if (!configLevel.equals(that.configLevel)) return false;
            if (!enable.equals(that.enable)) return false;
            if (!gatewayUniqueId.equals(that.gatewayUniqueId)) return false;
            if (!pluginId.equals(that.pluginId)) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            return this.resourceIdList != null ? this.resourceIdList.equals(that.resourceIdList) : that.resourceIdList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configLevel.hashCode();
            result = 31 * result + (this.enable.hashCode());
            result = 31 * result + (this.gatewayUniqueId.hashCode());
            result = 31 * result + (this.pluginId.hashCode());
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.resourceIdList != null ? this.resourceIdList.hashCode() : 0);
            return result;
        }
    }
}
