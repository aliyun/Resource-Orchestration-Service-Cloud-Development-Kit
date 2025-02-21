package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::PluginClass</code>, which is used to create a plug-in class.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.734Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosPluginClass")
public class RosPluginClass extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPluginClass(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPluginClass(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosPluginClass.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPluginClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosPluginClassProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAlias() {
        return software.amazon.jsii.Kernel.get(this, "attrAlias", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDocument() {
        return software.amazon.jsii.Kernel.get(this, "attrDocument", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginClassName() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginClassName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWasmLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrWasmLanguage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExecutePriority() {
        return software.amazon.jsii.Kernel.get(this, "executePriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecutePriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "executePriority", java.util.Objects.requireNonNull(value, "executePriority is required"));
    }

    /**
     */
    public void setExecutePriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executePriority", java.util.Objects.requireNonNull(value, "executePriority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExecuteStage() {
        return software.amazon.jsii.Kernel.get(this, "executeStage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecuteStage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "executeStage", java.util.Objects.requireNonNull(value, "executeStage is required"));
    }

    /**
     */
    public void setExecuteStage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executeStage", java.util.Objects.requireNonNull(value, "executeStage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPluginClassName() {
        return software.amazon.jsii.Kernel.get(this, "pluginClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPluginClassName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pluginClassName", java.util.Objects.requireNonNull(value, "pluginClassName is required"));
    }

    /**
     */
    public void setPluginClassName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pluginClassName", java.util.Objects.requireNonNull(value, "pluginClassName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersionDescription() {
        return software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersionDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "versionDescription", java.util.Objects.requireNonNull(value, "versionDescription is required"));
    }

    /**
     */
    public void setVersionDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versionDescription", java.util.Objects.requireNonNull(value, "versionDescription is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWasmLanguage() {
        return software.amazon.jsii.Kernel.get(this, "wasmLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWasmLanguage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wasmLanguage", java.util.Objects.requireNonNull(value, "wasmLanguage is required"));
    }

    /**
     */
    public void setWasmLanguage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wasmLanguage", java.util.Objects.requireNonNull(value, "wasmLanguage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWasmUrl() {
        return software.amazon.jsii.Kernel.get(this, "wasmUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWasmUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wasmUrl", java.util.Objects.requireNonNull(value, "wasmUrl is required"));
    }

    /**
     */
    public void setWasmUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wasmUrl", java.util.Objects.requireNonNull(value, "wasmUrl is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlias() {
        return software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlias(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "alias", value);
    }

    /**
     */
    public void setAlias(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alias", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSupportedMinGatewayVersion() {
        return software.amazon.jsii.Kernel.get(this, "supportedMinGatewayVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSupportedMinGatewayVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "supportedMinGatewayVersion", value);
    }

    /**
     */
    public void setSupportedMinGatewayVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "supportedMinGatewayVersion", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosPluginClass}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosPluginClass> {
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
        private final com.aliyun.ros.cdk.apig.RosPluginClassProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosPluginClassProps.Builder();
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
         * @param executePriority This parameter is required.
         */
        public Builder executePriority(final java.lang.Number executePriority) {
            this.props.executePriority(executePriority);
            return this;
        }
        /**
         * @return {@code this}
         * @param executePriority This parameter is required.
         */
        public Builder executePriority(final com.aliyun.ros.cdk.core.IResolvable executePriority) {
            this.props.executePriority(executePriority);
            return this;
        }

        /**
         * @return {@code this}
         * @param executeStage This parameter is required.
         */
        public Builder executeStage(final java.lang.String executeStage) {
            this.props.executeStage(executeStage);
            return this;
        }
        /**
         * @return {@code this}
         * @param executeStage This parameter is required.
         */
        public Builder executeStage(final com.aliyun.ros.cdk.core.IResolvable executeStage) {
            this.props.executeStage(executeStage);
            return this;
        }

        /**
         * @return {@code this}
         * @param pluginClassName This parameter is required.
         */
        public Builder pluginClassName(final java.lang.String pluginClassName) {
            this.props.pluginClassName(pluginClassName);
            return this;
        }
        /**
         * @return {@code this}
         * @param pluginClassName This parameter is required.
         */
        public Builder pluginClassName(final com.aliyun.ros.cdk.core.IResolvable pluginClassName) {
            this.props.pluginClassName(pluginClassName);
            return this;
        }

        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * @return {@code this}
         * @param versionDescription This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param versionDescription This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param wasmLanguage This parameter is required.
         */
        public Builder wasmLanguage(final java.lang.String wasmLanguage) {
            this.props.wasmLanguage(wasmLanguage);
            return this;
        }
        /**
         * @return {@code this}
         * @param wasmLanguage This parameter is required.
         */
        public Builder wasmLanguage(final com.aliyun.ros.cdk.core.IResolvable wasmLanguage) {
            this.props.wasmLanguage(wasmLanguage);
            return this;
        }

        /**
         * @return {@code this}
         * @param wasmUrl This parameter is required.
         */
        public Builder wasmUrl(final java.lang.String wasmUrl) {
            this.props.wasmUrl(wasmUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param wasmUrl This parameter is required.
         */
        public Builder wasmUrl(final com.aliyun.ros.cdk.core.IResolvable wasmUrl) {
            this.props.wasmUrl(wasmUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param alias This parameter is required.
         */
        public Builder alias(final java.lang.String alias) {
            this.props.alias(alias);
            return this;
        }
        /**
         * @return {@code this}
         * @param alias This parameter is required.
         */
        public Builder alias(final com.aliyun.ros.cdk.core.IResolvable alias) {
            this.props.alias(alias);
            return this;
        }

        /**
         * @return {@code this}
         * @param supportedMinGatewayVersion This parameter is required.
         */
        public Builder supportedMinGatewayVersion(final java.lang.String supportedMinGatewayVersion) {
            this.props.supportedMinGatewayVersion(supportedMinGatewayVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param supportedMinGatewayVersion This parameter is required.
         */
        public Builder supportedMinGatewayVersion(final com.aliyun.ros.cdk.core.IResolvable supportedMinGatewayVersion) {
            this.props.supportedMinGatewayVersion(supportedMinGatewayVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosPluginClass}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosPluginClass build() {
            return new com.aliyun.ros.cdk.apig.RosPluginClass(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
