package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  <code>ALIYUN::ApiGateway::Plugin</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:44.191Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Plugin")
public class Plugin extends com.aliyun.ros.cdk.core.Resource {

    protected Plugin(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Plugin(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Plugin</code>.
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
    public Plugin(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ApiGateway::Plugin</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Plugin(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.PluginProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PluginData: The definition statement of the plug-in.
     * <p>
     * Plug-in definition statements in the JSON and YAML formats are supported.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginData() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PluginId: The generated plugin ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PluginName: The name of the plug-in that you want to create.
     * <p>
     * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginName() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PluginType: The type of the plug-in.
     * <p>
     * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginType() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Plugin}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Plugin> {
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
        private final com.aliyun.ros.cdk.apigateway.PluginProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.PluginProps.Builder();
        }

        /**
         * Property pluginData: The definition statement of the plug-in.
         * <p>
         * Plug-in definition statements in the JSON and YAML formats are supported.
         * <p>
         * @return {@code this}
         * @param pluginData Property pluginData: The definition statement of the plug-in. This parameter is required.
         */
        public Builder pluginData(final java.lang.String pluginData) {
            this.props.pluginData(pluginData);
            return this;
        }
        /**
         * Property pluginData: The definition statement of the plug-in.
         * <p>
         * Plug-in definition statements in the JSON and YAML formats are supported.
         * <p>
         * @return {@code this}
         * @param pluginData Property pluginData: The definition statement of the plug-in. This parameter is required.
         */
        public Builder pluginData(final com.aliyun.ros.cdk.core.IResolvable pluginData) {
            this.props.pluginData(pluginData);
            return this;
        }

        /**
         * Property pluginName: The name of the plug-in that you want to create.
         * <p>
         * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         * <p>
         * @return {@code this}
         * @param pluginName Property pluginName: The name of the plug-in that you want to create. This parameter is required.
         */
        public Builder pluginName(final java.lang.String pluginName) {
            this.props.pluginName(pluginName);
            return this;
        }
        /**
         * Property pluginName: The name of the plug-in that you want to create.
         * <p>
         * It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
         * <p>
         * @return {@code this}
         * @param pluginName Property pluginName: The name of the plug-in that you want to create. This parameter is required.
         */
        public Builder pluginName(final com.aliyun.ros.cdk.core.IResolvable pluginName) {
            this.props.pluginName(pluginName);
            return this;
        }

        /**
         * Property pluginType: The type of the plug-in.
         * <p>
         * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         * <p>
         * @return {@code this}
         * @param pluginType Property pluginType: The type of the plug-in. This parameter is required.
         */
        public Builder pluginType(final java.lang.String pluginType) {
            this.props.pluginType(pluginType);
            return this;
        }
        /**
         * Property pluginType: The type of the plug-in.
         * <p>
         * Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
         * <p>
         * @return {@code this}
         * @param pluginType Property pluginType: The type of the plug-in. This parameter is required.
         */
        public Builder pluginType(final com.aliyun.ros.cdk.core.IResolvable pluginType) {
            this.props.pluginType(pluginType);
            return this;
        }

        /**
         * Property description: The description of the plug-in, which cannot exceed 200 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the plug-in, which cannot exceed 200 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the plug-in, which cannot exceed 200 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the plug-in, which cannot exceed 200 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosPlugin.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Plugin}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Plugin build() {
            return new com.aliyun.ros.cdk.apigateway.Plugin(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
