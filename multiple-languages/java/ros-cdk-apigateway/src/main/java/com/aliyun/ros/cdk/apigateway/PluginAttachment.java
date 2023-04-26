package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::PluginAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.353Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.PluginAttachment")
public class PluginAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected PluginAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PluginAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ApiGateway::PluginAttachment`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public PluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ApiGateway::PluginAttachment`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApiId: The api id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PluginId: The plugin id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.PluginAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.PluginAttachment> {
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
        private final com.aliyun.ros.cdk.apigateway.PluginAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.PluginAttachmentProps.Builder();
        }

        /**
         * Property apiId: The ID of the API to which you want to bind the plug-in.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: The ID of the API to which you want to bind the plug-in. This parameter is required.
         */
        public Builder apiId(final java.lang.String apiId) {
            this.props.apiId(apiId);
            return this;
        }
        /**
         * Property apiId: The ID of the API to which you want to bind the plug-in.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: The ID of the API to which you want to bind the plug-in. This parameter is required.
         */
        public Builder apiId(final com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.props.apiId(apiId);
            return this;
        }

        /**
         * Property pluginId: The ID of the plugin that you want to bind.
         * <p>
         * @return {@code this}
         * @param pluginId Property pluginId: The ID of the plugin that you want to bind. This parameter is required.
         */
        public Builder pluginId(final java.lang.String pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }
        /**
         * Property pluginId: The ID of the plugin that you want to bind.
         * <p>
         * @return {@code this}
         * @param pluginId Property pluginId: The ID of the plugin that you want to bind. This parameter is required.
         */
        public Builder pluginId(final com.aliyun.ros.cdk.core.IResolvable pluginId) {
            this.props.pluginId(pluginId);
            return this;
        }

        /**
         * Property stageName: The name of the runtime environment.
         * <p>
         * Valid values:
         * RELEASE: indicates the release environment.
         * PRE: indicates the pre-release environment.
         * TEST: indicates the test environment.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: The name of the runtime environment. This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * Property stageName: The name of the runtime environment.
         * <p>
         * Valid values:
         * RELEASE: indicates the release environment.
         * PRE: indicates the pre-release environment.
         * TEST: indicates the test environment.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: The name of the runtime environment. This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.PluginAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.PluginAttachment build() {
            return new com.aliyun.ros.cdk.apigateway.PluginAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
