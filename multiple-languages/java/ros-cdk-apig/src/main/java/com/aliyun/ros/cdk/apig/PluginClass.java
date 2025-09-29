package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::PluginClass</code>, which is used to create a plug-in class.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.914Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.PluginClass")
public class PluginClass extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IPluginClass {

    protected PluginClass(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PluginClass(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PluginClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PluginClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Alias: The alias of the plugin class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the plugin class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Document: The document of plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDocument() {
        return software.amazon.jsii.Kernel.get(this, "attrDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassName() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The type of the plugin class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WasmLanguage: Wasm language.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWasmLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrWasmLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginClassProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginClassProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.PluginClass}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.PluginClass> {
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
        private final com.aliyun.ros.cdk.apig.PluginClassProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.PluginClassProps.Builder();
        }

        /**
         * Property description: The description of the plugin class.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the plugin class. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the plugin class.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the plugin class. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property executePriority: The execute priority of the Plugin.
         * <p>
         * @return {@code this}
         * @param executePriority Property executePriority: The execute priority of the Plugin. This parameter is required.
         */
        public Builder executePriority(final java.lang.Number executePriority) {
            this.props.executePriority(executePriority);
            return this;
        }
        /**
         * Property executePriority: The execute priority of the Plugin.
         * <p>
         * @return {@code this}
         * @param executePriority Property executePriority: The execute priority of the Plugin. This parameter is required.
         */
        public Builder executePriority(final com.aliyun.ros.cdk.core.IResolvable executePriority) {
            this.props.executePriority(executePriority);
            return this;
        }

        /**
         * Property executeStage: The Execution stage.
         * <p>
         * @return {@code this}
         * @param executeStage Property executeStage: The Execution stage. This parameter is required.
         */
        public Builder executeStage(final java.lang.String executeStage) {
            this.props.executeStage(executeStage);
            return this;
        }
        /**
         * Property executeStage: The Execution stage.
         * <p>
         * @return {@code this}
         * @param executeStage Property executeStage: The Execution stage. This parameter is required.
         */
        public Builder executeStage(final com.aliyun.ros.cdk.core.IResolvable executeStage) {
            this.props.executeStage(executeStage);
            return this;
        }

        /**
         * Property pluginClassName: The name of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         */
        public Builder pluginClassName(final java.lang.String pluginClassName) {
            this.props.pluginClassName(pluginClassName);
            return this;
        }
        /**
         * Property pluginClassName: The name of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         */
        public Builder pluginClassName(final com.aliyun.ros.cdk.core.IResolvable pluginClassName) {
            this.props.pluginClassName(pluginClassName);
            return this;
        }

        /**
         * Property version: The version of plugin class.
         * <p>
         * @return {@code this}
         * @param version Property version: The version of plugin class. This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * Property version: The version of plugin class.
         * <p>
         * @return {@code this}
         * @param version Property version: The version of plugin class. This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * Property versionDescription: The description of the version .
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: The description of the version . This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }
        /**
         * Property versionDescription: The description of the version .
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: The description of the version . This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }

        /**
         * Property wasmLanguage: the language of the wasm.
         * <p>
         * @return {@code this}
         * @param wasmLanguage Property wasmLanguage: the language of the wasm. This parameter is required.
         */
        public Builder wasmLanguage(final java.lang.String wasmLanguage) {
            this.props.wasmLanguage(wasmLanguage);
            return this;
        }
        /**
         * Property wasmLanguage: the language of the wasm.
         * <p>
         * @return {@code this}
         * @param wasmLanguage Property wasmLanguage: the language of the wasm. This parameter is required.
         */
        public Builder wasmLanguage(final com.aliyun.ros.cdk.core.IResolvable wasmLanguage) {
            this.props.wasmLanguage(wasmLanguage);
            return this;
        }

        /**
         * Property wasmUrl: The url of the wasm.
         * <p>
         * @return {@code this}
         * @param wasmUrl Property wasmUrl: The url of the wasm. This parameter is required.
         */
        public Builder wasmUrl(final java.lang.String wasmUrl) {
            this.props.wasmUrl(wasmUrl);
            return this;
        }
        /**
         * Property wasmUrl: The url of the wasm.
         * <p>
         * @return {@code this}
         * @param wasmUrl Property wasmUrl: The url of the wasm. This parameter is required.
         */
        public Builder wasmUrl(final com.aliyun.ros.cdk.core.IResolvable wasmUrl) {
            this.props.wasmUrl(wasmUrl);
            return this;
        }

        /**
         * Property alias: The alias of the plugin class.
         * <p>
         * @return {@code this}
         * @param alias Property alias: The alias of the plugin class. This parameter is required.
         */
        public Builder alias(final java.lang.String alias) {
            this.props.alias(alias);
            return this;
        }
        /**
         * Property alias: The alias of the plugin class.
         * <p>
         * @return {@code this}
         * @param alias Property alias: The alias of the plugin class. This parameter is required.
         */
        public Builder alias(final com.aliyun.ros.cdk.core.IResolvable alias) {
            this.props.alias(alias);
            return this;
        }

        /**
         * Property supportedMinGatewayVersion: The supported minimum gateway version.
         * <p>
         * @return {@code this}
         * @param supportedMinGatewayVersion Property supportedMinGatewayVersion: The supported minimum gateway version. This parameter is required.
         */
        public Builder supportedMinGatewayVersion(final java.lang.String supportedMinGatewayVersion) {
            this.props.supportedMinGatewayVersion(supportedMinGatewayVersion);
            return this;
        }
        /**
         * Property supportedMinGatewayVersion: The supported minimum gateway version.
         * <p>
         * @return {@code this}
         * @param supportedMinGatewayVersion Property supportedMinGatewayVersion: The supported minimum gateway version. This parameter is required.
         */
        public Builder supportedMinGatewayVersion(final com.aliyun.ros.cdk.core.IResolvable supportedMinGatewayVersion) {
            this.props.supportedMinGatewayVersion(supportedMinGatewayVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.PluginClass}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.PluginClass build() {
            return new com.aliyun.ros.cdk.apig.PluginClass(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
