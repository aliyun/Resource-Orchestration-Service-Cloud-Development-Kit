package com.aliyun.ros.cdk.apig.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::APIG::Plugins</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.660Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.Plugins")
public class Plugins extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.datasource.IPlugins {

    protected Plugins(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Plugins(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Plugins(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.datasource.PluginsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Plugins(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.datasource.PluginsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Plugins(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute PluginIds: The list of plugin IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Plugins: The list of plugins.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlugins() {
        return software.amazon.jsii.Kernel.get(this, "attrPlugins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.PluginsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.datasource.PluginsProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.datasource.Plugins}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.datasource.Plugins> {
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
        private com.aliyun.ros.cdk.apig.datasource.PluginsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property gatewayId: The ID of the Cloud Native API Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.String gatewayId) {
            this.props().gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of the Cloud Native API Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props().gatewayId(gatewayId);
            return this;
        }

        /**
         * Property pluginClassId: The ID of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassId Property pluginClassId: The ID of the plugin class. This parameter is required.
         */
        public Builder pluginClassId(final java.lang.String pluginClassId) {
            this.props().pluginClassId(pluginClassId);
            return this;
        }
        /**
         * Property pluginClassId: The ID of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassId Property pluginClassId: The ID of the plugin class. This parameter is required.
         */
        public Builder pluginClassId(final com.aliyun.ros.cdk.core.IResolvable pluginClassId) {
            this.props().pluginClassId(pluginClassId);
            return this;
        }

        /**
         * Property pluginClassName: The name of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         */
        public Builder pluginClassName(final java.lang.String pluginClassName) {
            this.props().pluginClassName(pluginClassName);
            return this;
        }
        /**
         * Property pluginClassName: The name of the plugin class.
         * <p>
         * @return {@code this}
         * @param pluginClassName Property pluginClassName: The name of the plugin class. This parameter is required.
         */
        public Builder pluginClassName(final com.aliyun.ros.cdk.core.IResolvable pluginClassName) {
            this.props().pluginClassName(pluginClassName);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.datasource.Plugins}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.datasource.Plugins build() {
            return new com.aliyun.ros.cdk.apig.datasource.Plugins(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.apig.datasource.PluginsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.apig.datasource.PluginsProps.Builder();
            }
            return this.props;
        }
    }
}
