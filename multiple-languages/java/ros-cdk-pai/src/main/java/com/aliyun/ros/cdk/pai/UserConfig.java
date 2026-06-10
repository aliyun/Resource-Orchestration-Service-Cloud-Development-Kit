package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::UserConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.875Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.UserConfig")
public class UserConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IUserConfig {

    protected UserConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UserConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UserConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CategoryName: Represents a resource attribute for a configuration category.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategoryName() {
        return software.amazon.jsii.Kernel.get(this, "attrCategoryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigKey() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Configs: Represents a resource property for the configuration list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigs() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.UserConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.UserConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.UserConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.UserConfig> {
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
        private final com.aliyun.ros.cdk.pai.UserConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.UserConfigProps.Builder();
        }

        /**
         * Property categoryName: Represents a resource attribute for a configuration category.
         * <p>
         * @return {@code this}
         * @param categoryName Property categoryName: Represents a resource attribute for a configuration category. This parameter is required.
         */
        public Builder categoryName(final java.lang.String categoryName) {
            this.props.categoryName(categoryName);
            return this;
        }
        /**
         * Property categoryName: Represents a resource attribute for a configuration category.
         * <p>
         * @return {@code this}
         * @param categoryName Property categoryName: Represents a resource attribute for a configuration category. This parameter is required.
         */
        public Builder categoryName(final com.aliyun.ros.cdk.core.IResolvable categoryName) {
            this.props.categoryName(categoryName);
            return this;
        }

        /**
         * Property configKey: Represents the resource attribute of the configuration Key.
         * <p>
         * @return {@code this}
         * @param configKey Property configKey: Represents the resource attribute of the configuration Key. This parameter is required.
         */
        public Builder configKey(final java.lang.String configKey) {
            this.props.configKey(configKey);
            return this;
        }
        /**
         * Property configKey: Represents the resource attribute of the configuration Key.
         * <p>
         * @return {@code this}
         * @param configKey Property configKey: Represents the resource attribute of the configuration Key. This parameter is required.
         */
        public Builder configKey(final com.aliyun.ros.cdk.core.IResolvable configKey) {
            this.props.configKey(configKey);
            return this;
        }

        /**
         * Property configs: Represents a resource property for the configuration list.
         * <p>
         * @return {@code this}
         * @param configs Property configs: Represents a resource property for the configuration list. This parameter is required.
         */
        public Builder configs(final com.aliyun.ros.cdk.core.IResolvable configs) {
            this.props.configs(configs);
            return this;
        }
        /**
         * Property configs: Represents a resource property for the configuration list.
         * <p>
         * @return {@code this}
         * @param configs Property configs: Represents a resource property for the configuration list. This parameter is required.
         */
        public Builder configs(final java.util.List<? extends java.lang.Object> configs) {
            this.props.configs(configs);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.UserConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.UserConfig build() {
            return new com.aliyun.ros.cdk.pai.UserConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
