package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::PluginAttachment</code>, which is used to bind a plug-in.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.636Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.PluginAttachment")
public class PluginAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IPluginAttachment {

    protected PluginAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PluginAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceNames() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceParentIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceParentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Enable: Whether to enable this plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PluginClassInfo: The type of the plugin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginClassInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.PluginAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.PluginAttachment> {
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
        private final com.aliyun.ros.cdk.apig.PluginAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.PluginAttachmentProps.Builder();
        }

        /**
         * Property pluginInfo: The information about the association of plugin with gateway instance.
         * <p>
         * @return {@code this}
         * @param pluginInfo Property pluginInfo: The information about the association of plugin with gateway instance. This parameter is required.
         */
        public Builder pluginInfo(final com.aliyun.ros.cdk.core.IResolvable pluginInfo) {
            this.props.pluginInfo(pluginInfo);
            return this;
        }
        /**
         * Property pluginInfo: The information about the association of plugin with gateway instance.
         * <p>
         * @return {@code this}
         * @param pluginInfo Property pluginInfo: The information about the association of plugin with gateway instance. This parameter is required.
         */
        public Builder pluginInfo(final com.aliyun.ros.cdk.apig.RosPluginAttachment.PluginInfoProperty pluginInfo) {
            this.props.pluginInfo(pluginInfo);
            return this;
        }

        /**
         * Property attachResourceId: The resource ID to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceId Property attachResourceId: The resource ID to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceId(final java.lang.String attachResourceId) {
            this.props.attachResourceId(attachResourceId);
            return this;
        }
        /**
         * Property attachResourceId: The resource ID to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceId Property attachResourceId: The resource ID to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceId(final com.aliyun.ros.cdk.core.IResolvable attachResourceId) {
            this.props.attachResourceId(attachResourceId);
            return this;
        }

        /**
         * Property attachResourceIds: The list of resource IDs to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceIds Property attachResourceIds: The list of resource IDs to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceIds(final com.aliyun.ros.cdk.core.IResolvable attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }
        /**
         * Property attachResourceIds: The list of resource IDs to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceIds Property attachResourceIds: The list of resource IDs to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceIds(final java.util.List<? extends java.lang.Object> attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }

        /**
         * Property attachResourceType: The type of the resource to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceType Property attachResourceType: The type of the resource to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceType(final java.lang.String attachResourceType) {
            this.props.attachResourceType(attachResourceType);
            return this;
        }
        /**
         * Property attachResourceType: The type of the resource to be attached by the plugin.
         * <p>
         * @return {@code this}
         * @param attachResourceType Property attachResourceType: The type of the resource to be attached by the plugin. This parameter is required.
         */
        public Builder attachResourceType(final com.aliyun.ros.cdk.core.IResolvable attachResourceType) {
            this.props.attachResourceType(attachResourceType);
            return this;
        }

        /**
         * Property enable: Whether to enable this plugin, default value is false.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to enable this plugin, default value is false. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Whether to enable this plugin, default value is false.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to enable this plugin, default value is false. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property environmentId: The ID of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The ID of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The ID of the environment. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.PluginAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.PluginAttachment build() {
            return new com.aliyun.ros.cdk.apig.PluginAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
