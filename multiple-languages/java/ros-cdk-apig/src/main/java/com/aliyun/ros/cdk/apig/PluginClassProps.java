package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>PluginClass</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.PluginClassProps")
@software.amazon.jsii.Jsii.Proxy(PluginClassProps.Jsii$Proxy.class)
public interface PluginClassProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property executePriority: The execute priority of the Plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExecutePriority();

    /**
     * Property executeStage: The Execution stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExecuteStage();

    /**
     * Property pluginClassName: The name of the plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginClassName();

    /**
     * Property version: The version of plugin class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     * Property versionDescription: The description of the version .
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersionDescription();

    /**
     * Property wasmLanguage: the language of the wasm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWasmLanguage();

    /**
     * Property wasmUrl: The url of the wasm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWasmUrl();

    /**
     * Property alias: The alias of the plugin class.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlias() {
        return null;
    }

    /**
     * Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportedMinGatewayVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PluginClassProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PluginClassProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PluginClassProps> {
        java.lang.Object description;
        java.lang.Object executePriority;
        java.lang.Object executeStage;
        java.lang.Object pluginClassName;
        java.lang.Object version;
        java.lang.Object versionDescription;
        java.lang.Object wasmLanguage;
        java.lang.Object wasmUrl;
        java.lang.Object alias;
        java.lang.Object supportedMinGatewayVersion;

        /**
         * Sets the value of {@link PluginClassProps#getDescription}
         * @param description Property description: The description of the plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getDescription}
         * @param description Property description: The description of the plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getExecutePriority}
         * @param executePriority Property executePriority: The execute priority of the Plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder executePriority(java.lang.Number executePriority) {
            this.executePriority = executePriority;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getExecutePriority}
         * @param executePriority Property executePriority: The execute priority of the Plugin. This parameter is required.
         * @return {@code this}
         */
        public Builder executePriority(com.aliyun.ros.cdk.core.IResolvable executePriority) {
            this.executePriority = executePriority;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getExecuteStage}
         * @param executeStage Property executeStage: The Execution stage. This parameter is required.
         * @return {@code this}
         */
        public Builder executeStage(java.lang.String executeStage) {
            this.executeStage = executeStage;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getExecuteStage}
         * @param executeStage Property executeStage: The Execution stage. This parameter is required.
         * @return {@code this}
         */
        public Builder executeStage(com.aliyun.ros.cdk.core.IResolvable executeStage) {
            this.executeStage = executeStage;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getPluginClassName}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginClassName(java.lang.String pluginClassName) {
            this.pluginClassName = pluginClassName;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getPluginClassName}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginClassName(com.aliyun.ros.cdk.core.IResolvable pluginClassName) {
            this.pluginClassName = pluginClassName;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getVersion}
         * @param version Property version: The version of plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getVersion}
         * @param version Property version: The version of plugin class. This parameter is required.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getVersionDescription}
         * @param versionDescription Property versionDescription: The description of the version . This parameter is required.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getVersionDescription}
         * @param versionDescription Property versionDescription: The description of the version . This parameter is required.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getWasmLanguage}
         * @param wasmLanguage Property wasmLanguage: the language of the wasm. This parameter is required.
         * @return {@code this}
         */
        public Builder wasmLanguage(java.lang.String wasmLanguage) {
            this.wasmLanguage = wasmLanguage;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getWasmLanguage}
         * @param wasmLanguage Property wasmLanguage: the language of the wasm. This parameter is required.
         * @return {@code this}
         */
        public Builder wasmLanguage(com.aliyun.ros.cdk.core.IResolvable wasmLanguage) {
            this.wasmLanguage = wasmLanguage;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getWasmUrl}
         * @param wasmUrl Property wasmUrl: The url of the wasm. This parameter is required.
         * @return {@code this}
         */
        public Builder wasmUrl(java.lang.String wasmUrl) {
            this.wasmUrl = wasmUrl;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getWasmUrl}
         * @param wasmUrl Property wasmUrl: The url of the wasm. This parameter is required.
         * @return {@code this}
         */
        public Builder wasmUrl(com.aliyun.ros.cdk.core.IResolvable wasmUrl) {
            this.wasmUrl = wasmUrl;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getAlias}
         * @param alias Property alias: The alias of the plugin class.
         * @return {@code this}
         */
        public Builder alias(java.lang.String alias) {
            this.alias = alias;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getAlias}
         * @param alias Property alias: The alias of the plugin class.
         * @return {@code this}
         */
        public Builder alias(com.aliyun.ros.cdk.core.IResolvable alias) {
            this.alias = alias;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getSupportedMinGatewayVersion}
         * @param supportedMinGatewayVersion Property supportedMinGatewayVersion: The supported minimum gateway version.
         * @return {@code this}
         */
        public Builder supportedMinGatewayVersion(java.lang.String supportedMinGatewayVersion) {
            this.supportedMinGatewayVersion = supportedMinGatewayVersion;
            return this;
        }

        /**
         * Sets the value of {@link PluginClassProps#getSupportedMinGatewayVersion}
         * @param supportedMinGatewayVersion Property supportedMinGatewayVersion: The supported minimum gateway version.
         * @return {@code this}
         */
        public Builder supportedMinGatewayVersion(com.aliyun.ros.cdk.core.IResolvable supportedMinGatewayVersion) {
            this.supportedMinGatewayVersion = supportedMinGatewayVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PluginClassProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PluginClassProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PluginClassProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginClassProps {
        private final java.lang.Object description;
        private final java.lang.Object executePriority;
        private final java.lang.Object executeStage;
        private final java.lang.Object pluginClassName;
        private final java.lang.Object version;
        private final java.lang.Object versionDescription;
        private final java.lang.Object wasmLanguage;
        private final java.lang.Object wasmUrl;
        private final java.lang.Object alias;
        private final java.lang.Object supportedMinGatewayVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executePriority = software.amazon.jsii.Kernel.get(this, "executePriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executeStage = software.amazon.jsii.Kernel.get(this, "executeStage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginClassName = software.amazon.jsii.Kernel.get(this, "pluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.wasmLanguage = software.amazon.jsii.Kernel.get(this, "wasmLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.wasmUrl = software.amazon.jsii.Kernel.get(this, "wasmUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alias = software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.supportedMinGatewayVersion = software.amazon.jsii.Kernel.get(this, "supportedMinGatewayVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.executePriority = java.util.Objects.requireNonNull(builder.executePriority, "executePriority is required");
            this.executeStage = java.util.Objects.requireNonNull(builder.executeStage, "executeStage is required");
            this.pluginClassName = java.util.Objects.requireNonNull(builder.pluginClassName, "pluginClassName is required");
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.versionDescription = java.util.Objects.requireNonNull(builder.versionDescription, "versionDescription is required");
            this.wasmLanguage = java.util.Objects.requireNonNull(builder.wasmLanguage, "wasmLanguage is required");
            this.wasmUrl = java.util.Objects.requireNonNull(builder.wasmUrl, "wasmUrl is required");
            this.alias = builder.alias;
            this.supportedMinGatewayVersion = builder.supportedMinGatewayVersion;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getExecutePriority() {
            return this.executePriority;
        }

        @Override
        public final java.lang.Object getExecuteStage() {
            return this.executeStage;
        }

        @Override
        public final java.lang.Object getPluginClassName() {
            return this.pluginClassName;
        }

        @Override
        public final java.lang.Object getVersion() {
            return this.version;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
        }

        @Override
        public final java.lang.Object getWasmLanguage() {
            return this.wasmLanguage;
        }

        @Override
        public final java.lang.Object getWasmUrl() {
            return this.wasmUrl;
        }

        @Override
        public final java.lang.Object getAlias() {
            return this.alias;
        }

        @Override
        public final java.lang.Object getSupportedMinGatewayVersion() {
            return this.supportedMinGatewayVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("description", om.valueToTree(this.getDescription()));
            data.set("executePriority", om.valueToTree(this.getExecutePriority()));
            data.set("executeStage", om.valueToTree(this.getExecuteStage()));
            data.set("pluginClassName", om.valueToTree(this.getPluginClassName()));
            data.set("version", om.valueToTree(this.getVersion()));
            data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            data.set("wasmLanguage", om.valueToTree(this.getWasmLanguage()));
            data.set("wasmUrl", om.valueToTree(this.getWasmUrl()));
            if (this.getAlias() != null) {
                data.set("alias", om.valueToTree(this.getAlias()));
            }
            if (this.getSupportedMinGatewayVersion() != null) {
                data.set("supportedMinGatewayVersion", om.valueToTree(this.getSupportedMinGatewayVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.PluginClassProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PluginClassProps.Jsii$Proxy that = (PluginClassProps.Jsii$Proxy) o;

            if (!description.equals(that.description)) return false;
            if (!executePriority.equals(that.executePriority)) return false;
            if (!executeStage.equals(that.executeStage)) return false;
            if (!pluginClassName.equals(that.pluginClassName)) return false;
            if (!version.equals(that.version)) return false;
            if (!versionDescription.equals(that.versionDescription)) return false;
            if (!wasmLanguage.equals(that.wasmLanguage)) return false;
            if (!wasmUrl.equals(that.wasmUrl)) return false;
            if (this.alias != null ? !this.alias.equals(that.alias) : that.alias != null) return false;
            return this.supportedMinGatewayVersion != null ? this.supportedMinGatewayVersion.equals(that.supportedMinGatewayVersion) : that.supportedMinGatewayVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.executePriority.hashCode());
            result = 31 * result + (this.executeStage.hashCode());
            result = 31 * result + (this.pluginClassName.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.versionDescription.hashCode());
            result = 31 * result + (this.wasmLanguage.hashCode());
            result = 31 * result + (this.wasmUrl.hashCode());
            result = 31 * result + (this.alias != null ? this.alias.hashCode() : 0);
            result = 31 * result + (this.supportedMinGatewayVersion != null ? this.supportedMinGatewayVersion.hashCode() : 0);
            return result;
        }
    }
}
